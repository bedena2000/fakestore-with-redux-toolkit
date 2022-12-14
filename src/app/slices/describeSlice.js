import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const describeSlice = createSlice({
  name: 'describeSlice',
  initialState,
  reducers: {
    updateItem(state, action) {
      const newItem = [];
      newItem.push(action.payload);
      return newItem;
    },
  },
});

export default describeSlice.reducer;
export const { updateItem } = describeSlice.actions;
