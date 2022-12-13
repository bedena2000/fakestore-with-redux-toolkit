import { configureStore } from '@reduxjs/toolkit';

// Slices
import menuSlice from '../slices/menuSlice';
import shopItemsSlice from '../slices/shopItemsSlice';

export const store = configureStore({
  reducer: {
    menuIsActive: menuSlice,
    shopItems: shopItemsSlice,
  },
});
