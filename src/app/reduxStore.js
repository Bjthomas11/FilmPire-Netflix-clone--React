import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../services/movieAPI";
import { genreIdOrCategoryName } from "../features/currentGenreOrCategory";

export default configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    currentGenreOrCategory: genreIdOrCategoryName.reducer
  }
});
