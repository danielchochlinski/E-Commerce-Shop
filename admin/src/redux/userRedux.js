import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL USERS
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.Users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },

    //LOGIN USERS
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
