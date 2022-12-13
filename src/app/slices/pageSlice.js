import { createSlice } from '@reduxjs/toolkit';

const initialState = 1;

const pageSlice = createSlice({
  name: 'pageSlice',
  initialState,
  reducers: {
    changePage(state, action) {

    
      return action.payload;
    },
  },
});

export const { changePage } = pageSlice.actions;
export default pageSlice.reducer;
