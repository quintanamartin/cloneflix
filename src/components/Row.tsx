import React, {FC, useState, useEffect} from "react";
import YouTube from "react-youtube";

import axios from "../axios";

const movieTrailer = require("movie-trailer");

import "./Row.css";

interface Myprops {
  title: string;
  urlFetch: string;
  isLargeRow?: boolean;
}

interface Movies {
  id: number;
  title: string;
  original_language: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
}

const images_url = "https://image.tmdb.org/t/p/w500/";

const Row: FC<Myprops> = ({title, urlFetch, isLargeRow}: Myprops) => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<any>("");

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(urlFetch);

      setMovies(request.data.results);

      return request;
    };

    fetchMovies();
  }, [urlFetch]);

  const handleClick = (movie: any) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url: any) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          const param = urlParams.get("v");

          setTrailerUrl(param);
        })
        .catch(() => alert("movie trailer not available"));
    }
  };

  const opts: any = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            alt={movie.title}
            className={`poster-image ${isLargeRow && "large-poster-image"}`}
            src={`${images_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube opts={opts} videoId={trailerUrl} />}
    </div>
  );
};

export default Row;
