import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsList from '../features/productsList/productSlice';

export const store = configureStore({
  reducer: {
    productsList,
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
