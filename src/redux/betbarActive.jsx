import { createSlice } from '@reduxjs/toolkit';

export const betbarActiveSlice = createSlice({
  name: 'betbarActive',
  initialState: {
    betList: [],
  },
  reducers: {
    update: (state, action) => {
      if (state.betList.length) {
        const length = state.betList.length;
        const { id } = action.payload;
        state.betList = state.betList.filter((bet) => bet.id !== id);
        if (state.betList.length === length) {
          state.betList.push(action.payload);
        }
      } else {
        state.betList.push(action.payload);
      }
    },
  },
});

export const { update } = betbarActiveSlice.actions;

export default betbarActiveSlice.reducer;
