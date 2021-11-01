import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../reducers/counter';
import authReducer from '../reducers/auth';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
