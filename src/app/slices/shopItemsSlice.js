import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const shopItemsSlice = createSlice({
  name: 'shopItems',
  initialState,
  reducers: {
    addShopItems(state, action) {
        state.push(action.payload);
    }
  },
});

export const { addShopItems } = shopItemsSlice.actions;
export default shopItemsSlice.reducer;