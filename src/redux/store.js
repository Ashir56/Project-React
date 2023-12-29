import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './CrudSlice';

export const store = configureStore({
  reducer: {
    user: counterSlice
  }
});
