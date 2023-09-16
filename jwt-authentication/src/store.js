// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice'; // Import your authentication slice

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your authentication slice to the store
  },
});

export default store;
