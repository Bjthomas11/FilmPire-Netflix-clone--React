import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuth: false,
  session_id: ""
};

export const authSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    setUser: (state, action) => {
      //   console.log(action.payload);
      state.user = action.payload;
      state.isAuth = true;
      state.session_id = localStorage.getItem("session_id");

      localStorage.setItem("account_id", JSON.stringify(action.payload.id));
    }
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
export const userSelector = (state) => {
  return state.user;
};
