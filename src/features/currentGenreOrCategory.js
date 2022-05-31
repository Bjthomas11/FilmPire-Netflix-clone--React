import { createSlice } from "@reduxjs/toolkit";

export const genreIdOrCategoryName = createSlice({
  name: "genreIdOrCategoryName",
  initialState: {
    genreIdOrCategoryName: "",
    pageNumber: 1,
    searchQuery: ""
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      //   console.log(action.payload);
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = "";
    },
    searchMovie: (state, action) => {
      // console.log(action.payload);
      state.searchQuery = action.payload;
    }
  }
});

export const { selectGenreOrCategory, searchMovie } =
  genreIdOrCategoryName.actions;
export default genreIdOrCategoryName.reducer;
