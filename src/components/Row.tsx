import React, {FC, useState, useEffect} from "react";

import axios from "../axios";
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

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(urlFetch);

      setMovies(request.data.results);

      return request;
    };

    fetchMovies();
  }, [urlFetch]);

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
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
