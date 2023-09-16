// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null, // Initialize user as null when no user is logged in
    token: null, // Initialize token as null when no user is logged in
  },
  reducers: {
    loginUser: (state, action) => {
      // You can set the user and token based on the action payload (e.g., from JWT)
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoutUser: (state) => {
      // Clear user and token when logging out
      state.user = null;
      state.token = null;
    },
    registerUser: (state, action) => {
      // You can set the user and token based on the action payload (e.g., from JWT)
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    storeToken : (state, action) => {
      state.token = action.payload;
    }

  },
});

export const { loginUser, logoutUser, registerUser, storeToken } = authSlice.actions;
export default authSlice.reducer;
