import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '../store/slices/cartSlice.ts';
import { dishesReducer } from '../store/slices/dishesSlice.ts';

export const store = configureStore({
  reducer: {
    cart:  cartReducer,
    dishes: dishesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;