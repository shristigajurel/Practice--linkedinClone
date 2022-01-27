import { createSlice } from "@reduxjs/toolkit";

//we have login and logout action
//when you get an action you get a state of a user slice
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
//this is selector, it allows us to pull the information
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
