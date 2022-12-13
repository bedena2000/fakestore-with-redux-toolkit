import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const storeSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      const newArray = state.filter((item) => item.id !== action.payload.id);
      return newArray;
    },
  },
});

export const { addToWishCart, removeFromCart } = storeSlice.actions;
export default storeSlice.reducer;
