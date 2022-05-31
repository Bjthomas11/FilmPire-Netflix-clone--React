import React, { useState } from "react";
import { useGetMoviesQuery } from "../../services/movieAPI";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography
} from "@mui/material";
import { useSelector } from "react-redux";
import { MovieDetail } from "../index";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, isFetching, error } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery
  });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" mt="20px">
        <Typography variant="h4">
          No Movies Found
          <br />
          Please search for another movie
        </Typography>
      </Box>
    );
  }

  if (error) return "An error has occured";

  return (
    <div>
      <MovieDetail movies={data} />
    </div>
  );
};

export default Movies;
