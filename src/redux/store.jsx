import { configureStore } from '@reduxjs/toolkit';
import betbarActiveReducer from './betbarActive';
import modalVisibleReducer from './modalVisible';

export default configureStore({
  reducer: {
    betbarActive: betbarActiveReducer,
    modalVisible: modalVisibleReducer,
  },
});
