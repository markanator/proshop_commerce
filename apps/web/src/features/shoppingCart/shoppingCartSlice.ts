import { Product } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type ProductWithQuantity = Product & {
  qty: number;
};
export interface shoppingCartState {
  cartItems: ProductWithQuantity[];
}

const initialState: shoppingCartState = {
  cartItems: [],
};
export const shoppingCart = 'shoppingCart';
export const shoppingCartSlice = createSlice({
  name: shoppingCart,
  initialState,
  reducers: {
    addItem: (
      state,
      {
        payload: { product, qty },
      }: PayloadAction<{ product: Product; qty: number }>
    ) => {
      const newItem: ProductWithQuantity = { ...product, qty };
      const existingItem = state.cartItems.some(({ id }) => id === newItem.id);

      if (existingItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === newItem.id ? newItem : cartItem
        );
      } else {
        state.cartItems.push(newItem);
      }
    },
    removeItem: (state, { payload }: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== payload
      );
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;

export const selectShoppingCart = (state: RootState) => state.shoppingCart;

export default shoppingCartSlice.reducer;
