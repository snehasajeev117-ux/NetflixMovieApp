import { useState } from "react";
import Axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Horror() {
  const [horrorMovies, setHorrorMovies] = useState([]);

  const [fetchedVideoID, setFetchedVideoID] = useState("");

  Axios.get(
    "https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=32f9e877489c276a3376f21bd753a432"
  )
    .then(function (output) {
      setHorrorMovies(output.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });

  function collectTheMovieName(name) {
    console.log("Hi");

    movieTrailer(name)
      .then(function (output) {
        console.log(output);

        const myVideoID = new URLSearchParams(
          new URL(output).search
        ).get("v");

        console.log(myVideoID);

        setFetchedVideoID(myVideoID);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const additionalData = {
    height: "600px",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div>
      <h2
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "900"
        }}
      >
        HORROR MOVIES
      </h2>

      {fetchedVideoID && (
        <YouTube
          videoId={fetchedVideoID}
          opts={additionalData}
        />
      )}

      <div
        className="trendingdiv"
        style={{
          display: "flex",
          overflowX: "scroll"
        }}
      >
        {horrorMovies.map(function (i) {
          return (
            <img
              key={i.id}
              style={{ margin: "6px" }}
              onClick={function () {
                collectTheMovieName(i.title);
              }}
              height="250px"
              width="250px"
              src={
                "https://image.tmdb.org/t/p/original" +
                i.poster_path
              }
              alt={i.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Horror;
