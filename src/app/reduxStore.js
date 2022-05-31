import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../services/movieAPI";

export default configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer
  }
});
