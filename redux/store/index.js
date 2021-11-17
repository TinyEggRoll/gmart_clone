import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../reducers/cart';
import authReducer from '../reducers/auth';

const store = configureStore({
    reducer: { auth: authReducer, cart: cartReducer },
});

export default store;
