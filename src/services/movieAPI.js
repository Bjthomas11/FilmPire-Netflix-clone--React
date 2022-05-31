import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.REACT_APP_KEY;
const currentPage = 1;
// /movie/popular?

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // GET moves by type
    getMovies: builder.query({
      query: () => {
        return `/movie/popular?api_key=${apiKey}&page=${currentPage}`;
      }
    })
  })
});

export const { useGetMoviesQuery } = movieApi;
