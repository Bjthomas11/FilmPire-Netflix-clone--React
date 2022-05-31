import React, { useState, useEffect } from "react";
import { useGetMoviesQuery } from "../../services/movieAPI";
import { Axios } from "axios";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography
} from "@mui/material";
import { useSelector } from "react-redux";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useGetMoviesQuery();
  console.log(data);

  // useEffect(() => {}, []);
  return <div>Movies</div>;
};

export default Movies;
