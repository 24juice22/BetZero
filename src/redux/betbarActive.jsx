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
    addWager: (state, action) => {
      state.betList = state.betList.map((value) => {
        return value.id === action.payload.id
          ? {
              ...value,
              betAmount: action.payload.betAmount,
              winAmount: action.payload.winAmount,
            }
          : value;
      });
    },
  },
});

export const { update, addWager } = betbarActiveSlice.actions;

export default betbarActiveSlice.reducer;
