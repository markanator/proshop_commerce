import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface shoppingCartState {
  cartItems: any[];
}

const initialState: shoppingCartState = {
  cartItems: [],
};
export const shoppingCart = 'shoppingCart';
export const shoppingCartSlice = createSlice({
  name: shoppingCart,
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        state.cartItems.map((cartItem) =>
          cartItem.product === existingItem.product ? newItem : cartItem
        );
      } else {
        state.cartItems.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(incrementAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.value += action.payload;
    //   })
    //   .addCase(incrementAsync.rejected, (state) => {
    //     state.status = 'failed';
    //   });
  },
});

export const {} = shoppingCartSlice.actions;

export const selectProductList = (state: RootState) => state.shoppingCart;

export default shoppingCartSlice.reducer;
