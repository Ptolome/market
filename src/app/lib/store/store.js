import { configureStore } from '@reduxjs/toolkit';
import nftReducer from './slices/ntfSlice'
export const store = configureStore({
  reducer: {
    nft: nftReducer,
  },
});