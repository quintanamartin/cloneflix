import React, {FC, useState, useEffect} from "react";

import axios from "../axios";

interface Myprops {
  title: string;
  urlFetch: string;
}

interface Movies {
  id: number;
  title: string;
  original_language: string;
  poster_path: string;
  vote_average: number;
}

const images_url = "https://image.tmdb.org/t/p/w500/";

const Row: FC<Myprops> = ({title, urlFetch}: Myprops) => {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(urlFetch);

      console.log(request.data.results);
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
          <img key={movie.id} alt={movie.title} src={`${images_url}${movie.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

export default Row;
