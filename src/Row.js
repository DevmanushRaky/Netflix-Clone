import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("")

  //a snippet fo code which runs based on a specific condition/variable
  useEffect(() => {
    //if [], run once when the row loads,and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      //https://api.themoviedb.org/3/movie/550?api_key=0ea5889f77ed9660944da090003e9ff8
    }
    fetchData();
  }, [fetchUrl]);

  const opts ={
    height:"390",
    width:"100%",
    playVars:{
      //https://devlopers.google.com/youtube/player_parameters
      autoplay:1,
    },
  };

  const handleClick =(movie) =>{
    if(trailerUrl) {
     setTrailerUrl("");
    }else{
      movieTrailer(movie?.name || "")
      .then(url =>{
        const urlParams=new URLSearchParams( new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch(error => console.log(error))
    }
  
  };
 console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
          {/* posters */}
          {movies.map(movie => (
              <img 
              key={movie.id}
              onClick={() => handleClick (movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ?movie.poster_path:movie.backdrop_path}`}
              alt={movie.name} />
          ))}
      </div>
          {trailerUrl && <YouTube video={trailerUrl} opts={opts}  /> }
    </div>
  );
}

export default Row;
 