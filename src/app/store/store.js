import { configureStore } from '@reduxjs/toolkit';

// Slices
import menuSlice from '../slices/menuSlice';
import shopItemsSlice from '../slices/shopItemsSlice';
import pageSlice from '../slices/pageSlice';
import wishlistSlice from '../slices/wishlistSlice';
import cartSlice from '../slices/cartSlice';

export const store = configureStore({
  reducer: {
    menuIsActive: menuSlice,
    shopItems: shopItemsSlice,
    page: pageSlice,
    wishlist: wishlistSlice,
    cartItems: cartSlice,
  },
});
