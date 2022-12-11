import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    changeBurgerActive(state) {
      return !state;
    },
  },
});

export const { changeBurgerActive } = menuSlice.actions;
export default menuSlice.reducer;
