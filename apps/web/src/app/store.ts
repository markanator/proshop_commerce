import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import shoppingCart from '../features/shoppingCart/shoppingCartSlice';

const cartItemsFromLS = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

export const store = configureStore({
  reducer: {
    shoppingCart,
  },
  preloadedState: {
    shoppingCart: {
      cartItems: cartItemsFromLS,
    },
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
