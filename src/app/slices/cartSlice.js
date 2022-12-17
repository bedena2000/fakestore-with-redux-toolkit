import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const storeSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      const newArray = state.filter((item) => item.id !== action.payload);
      return newArray;
    },
    updateCartNumber(state, action) {
      const ourItem = state.filter((item) => item.id === action.payload)[0];
      const newItem = {
        ...ourItem,
        count: ourItem.count + 1,
      };
      const newArray = state.map((item) => {
        if (item.id !== ourItem.id) return item;
        return newItem;
      });
      console.log(newArray);
      console.log(newItem);
      console.log(ourItem);
      return newArray;
    },
    minusCartNumber(state, action) {
      console.log('hello');
      const ourItem = state.filter((item) => item.id === action.payload)[0];
      const newItem = {
        ...ourItem,
      };
      if (ourItem.count !== 1) {
        newItem.count = newItem.count - 1;
        const newArray = state.map((item) => {
          if (item.id !== ourItem.id) return item;
          return newItem;
        });
        return newArray;
      } else {
        const newArray = state.filter((item) => item.id !== newItem.id);
        return newArray;
      }
    },
  },
});

export const { addItemToCart, removeFromCart, updateCartNumber, minusCartNumber } =
  storeSlice.actions;
export default storeSlice.reducer;
