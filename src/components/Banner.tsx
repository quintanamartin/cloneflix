import {url} from "inspector";

import React, {useEffect, useState} from "react";

import movieRequests from "../api";
import axios from "../axios";
import "./Banner.css";

type Movie = {
  backdrop_path: string;
  title: string;
  original_title: string;
  overview: string;
  vote_average: number;
  release_date: string;
};
const Banner = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovie = async () => {
      const request = await axios.get(movieRequests.fetchPopular);
      const result =
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];

      setMovie(result);

      return request;
    };

    fetchMovie();
    console.log(movie);
  }, []);

  const truncate = (str: any, n: number) => {
    return str?.length > n ? `${str.substring(0, n - 1)}...` : str;
  };

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="content">
          <h1 className="title">{movie?.title || movie?.original_title}</h1>
          <p>
            {movie?.release_date.slice(0, 4)} - <small>Rating : {movie?.vote_average}</small>
          </p>
          <div className="content-buttons">
            <button className="content-button">Play</button>
            <button className="content-button">My list</button>
          </div>
          <h3 className="overview">{truncate(movie?.overview, 300)}</h3>
        </div>
      </header>
    </div>
  );
};

export default Banner;
