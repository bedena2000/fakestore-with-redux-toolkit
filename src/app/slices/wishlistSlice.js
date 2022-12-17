import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const newArray = [...state, action.payload];
      return newArray;
    },
    removeFromWishlist(state, action) {
      const newArray = state.filter((item) => item.id !== action.payload);
      return newArray;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
