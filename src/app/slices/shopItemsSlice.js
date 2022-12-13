import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const shopItemsSlice = createSlice({
  name: 'shopItems',
  initialState,
  reducers: {
    addShopItems(state, action) {
        return action.payload;
    }
  },
});

export const { addShopItems } = shopItemsSlice.actions;
export default shopItemsSlice.reducer;