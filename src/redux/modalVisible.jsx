import { createSlice } from '@reduxjs/toolkit';

export const modalVisibleSlice = createSlice({
  name: 'modalVisible',
  initialState: {
    visibility: false,
  },
  reducers: {
    update: (state, action) => {
      console.log('updated', action.payload);
      state.visibility = action.payload;
    },
  },
});

export const { update } = modalVisibleSlice.actions;

export default modalVisibleSlice.reducer;
