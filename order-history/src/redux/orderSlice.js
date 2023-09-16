// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        id: null, 
        date: null, 
        total: null,
        items: null,
        status: null,
        error: null
    },
    reducers: {
        setOrder: (state, action) => {
            state.id = action.payload.id;
            state.date = action.payload.date;
            state.total = action.payload.total;
            state.items = action.payload.items;
            state.status = action.payload.status;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
});

export const { setOrder, setError } = orderSlice.actions;
export default orderSlice.reducer;
