import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../reducers/cart';
import departmentsReducer from '../reducers/departments';

const store = configureStore({
    reducer: { cart: cartReducer, departments: departmentsReducer },
});

export default store;
