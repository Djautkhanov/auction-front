import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import itemSlice from "../features/itemSlice";
import auctionSlice from "../features/auctionSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    itemSlice,
    auctionSlice,
  },
});

export default store;
