import { configureStore } from '@reduxjs/toolkit';

// Slices
import menuSlice from '../slices/menuSlice';

export const store = configureStore({
  reducer: {
    menuIsActive: menuSlice,
  },
});
