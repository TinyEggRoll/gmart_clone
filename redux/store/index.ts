import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../reducers/cart';
import arrayDeptProductsReducer from '../reducers/arrayDeptProducts';

const store = configureStore({
  reducer: { cart: cartReducer, arrayDeptProducts: arrayDeptProductsReducer },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
