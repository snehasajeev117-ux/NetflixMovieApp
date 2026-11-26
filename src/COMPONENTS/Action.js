import {useState} from 'react'
import Axios from "axios"
import YouTube from "react-youtube"//In built Component
import movieTrailer from "movie-trailer"

function Action() 
{
    const [ actionMovies, setActionMovies] = useState([])

    const [ fetchedVideoID, setFetchedVideoID ] = useState("")

  Axios.get("https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=32f9e877489c276a3376f21bd753a432")
  .then(function(output)
  {
    setActionMovies(output.data.results)
  })
  .catch(function(error)
  {
    console.log(error)
  })

  function collectTheMovieName(name)
  {
    console.log("Hi")
    // name = The Creator --> is there any trailer present in the youtube or not, trailer we require
    movieTrailer(name)
    .then(function(output)
    {
        // output = https://www.youtube.com/watch?v=nFybJlICaR8
        // v -- videoID
        console.log(output)

        const myVideoID = new URLSearchParams(new URL(output).search).get("v");
        console.log(myVideoID)
        setFetchedVideoID(myVideoID)
        
    })
    .catch(function(error)
    {
        console.log(error)
    })
  }

  const additionalData = {
    height: "600px",
    width: "100%",
    playerVars: {
        autoplay: 1//Play the video
    }
  }

  return (
    <div>
        <h2 style={{color: "white", fontSize: "20px", fontWeight: "900"}}>ACTION MOVIES</h2>
        { fetchedVideoID && <YouTube videoId={fetchedVideoID} opts={additionalData}/> }
        <div className='trendingdiv' style={{display: "flex", overflowX: "scroll"}}>
        {
            actionMovies.map(function(i)
            {
                return (
                    <img style={{margin: "6px"}} onClick={function()
                    {
                        collectTheMovieName(i.title)
                    }} height="250px" width="250px" src={"https://image.tmdb.org/t/p/original"+i.poster_path} alt={i.title}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default Action
