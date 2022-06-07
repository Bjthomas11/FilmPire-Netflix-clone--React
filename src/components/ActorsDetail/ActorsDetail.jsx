import React, { Fragment, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  useGetActorDetailQuery,
  useGetMoviesByActorIdQuery
} from "../../services/movieAPI";
import { MovieDetail } from "../index.js";
import { Typography, Button, Grid, Box, CircularProgress } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import useStyles from "./styles";
import { Link } from "react-router-dom";

const ActorsDetail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();

  const { data, isFetching, error } = useGetActorDetailQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page: 1 });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => history.goBack()}
          color="primary"
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            <strong>DOB:</strong> {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            <strong>Bio:</strong> {data?.biography || "No actor bio available"}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => history.goBack()}
              color="primary"
            >
              Go Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0" width="100%">
        <Typography variant="h2" gutterBottom align="center">
          Other Movies
        </Typography>
        {movies ? (
          <MovieDetail movies={movies} numberOfMovies={8} />
        ) : (
          <Box>No movies were found.</Box>
        )}
      </Box>
    </Fragment>
  );
};

export default ActorsDetail;
