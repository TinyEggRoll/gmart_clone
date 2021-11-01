import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
