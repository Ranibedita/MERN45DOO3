import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("all");

  // console.log(search)

  const api = import.meta.env.VITE_URL;

  // console.log(moviesData)

  async function getMovies() {
    const url = api + "&s=" + search;
    const response = await axios.get(url);
    setMoviesData(response.data.Search);
  }
  useEffect(() => {
    getMovies();
  }, []);

  function handleClick() {
    getMovies();
  }

  return (
    <div>
      <h1> this is my movie page</h1>
      <img src={moviesData.Poster} alt="" />
      <p>Title :{moviesData.Title}</p>
      <p>Directer :{moviesData.Directer}</p>
      <p>Year : {moviesData.Year} </p>
      <p></p>
    </div>
  );
};

export default Movies;
