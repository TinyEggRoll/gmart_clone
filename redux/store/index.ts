import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../reducers/cart';
import departmentsReducer from '../reducers/departments';

const store = configureStore({
  reducer: { cart: cartReducer, departments: departmentsReducer },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {cart: cartReducer, departments: departmentsReducer}
export type AppDispatch = typeof store.dispatch;
