import { configureStore } from '@reduxjs/toolkit';
import betbarActiveReducer from './betbarActive';

export default configureStore({
  reducer: {
    betbarActive: betbarActiveReducer,
  },
});
