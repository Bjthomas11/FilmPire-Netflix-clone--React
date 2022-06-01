import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import { Movie } from "../index";

const MovieDetail = ({ movies }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, index) => (
        <Movie key={index} i={index} movie={movie} />
      ))}
    </Grid>
  );
};

export default MovieDetail;
