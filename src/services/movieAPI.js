import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.REACT_APP_KEY;
const currentPage = 1;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // GET movies by type
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // get movies by category
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?api_key=${apiKey}&page=${page}`;
        }
        // get movies by genre
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&api_key=${apiKey}&page=${page}`;
        }

        // get movies by search
        if (searchQuery) {
          return `search/movie?query=${searchQuery}&api_key=${apiKey}&page=${page}`;
        }

        // get popular movies(at init show popular movies)
        return `/movie/popular?api_key=${apiKey}&page=${page}`;
      }
    }),
    // GET genres
    getGenres: builder.query({
      query: () => {
        return `/genre/movie/list?api_key=${apiKey}&page=${currentPage}`;
      }
    }),
    // GET movie
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=${apiKey}`
    })
  })
});

export const { useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery } =
  movieApi;
