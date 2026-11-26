import React from 'react'
import Axios from "axios"

function TrendingMovies() 
{

    const [ myTrendingMovies, setMyTrendingMovies ] = React.useState([])

         // Logic to get all the trending movies for the entire week
        // https://api.themoviedb.org/3/trending/movie/week?language=en-US
        // API KEY --> query paramater
        Axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=32f9e877489c276a3376f21bd753a432")
        .then(function(output)
        {
            setMyTrendingMovies(output.data.results)
        })
        .catch(function(error)
        {
            console.log(error)
        })
   

  return (
    <div>
        <h2 style={{color: "white", fontSize: "20px", fontWeight: "900"}}>TRENDING MOVIES</h2>
        <div className='trendingdiv' style={{display: "flex", overflowX: "scroll"}}>
        {
            myTrendingMovies.map(function(i)
            {
                return (
                    <img style={{margin: "6px"}} height="250px" width="250px" src={"https://image.tmdb.org/t/p/original"+i.poster_path} alt={i.title}/>
                )
            })
        }
        </div>
    </div>
  )
}

// https://image.tmdb.org/t/p/original/poster_path

export default TrendingMovies
