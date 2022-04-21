// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../../axios';
// import { shoppingCart } from './shoppingCartSlice';

// // typically used to make async requests.
// export const addToCart = createAsyncThunk(
//   `${shoppingCart}/addToCart`,
//   async ({ productId, qty }: { productId: number; qty: number }) => {
//     const { data } = await axios.get(`/products/${productId}`);
//     // The value we return becomes the `fulfilled` action payload
//     return { product: data, qty };
//   }
// );

export {};
