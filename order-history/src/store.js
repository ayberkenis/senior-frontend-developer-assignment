// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './redux/orderSlice';

const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});

export default store;
