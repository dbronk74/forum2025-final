// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import creditLedgerReducer from "./slices/CreditLedgerSlice";
import adEngagementReducer from "./slices/AdEngagementSlice"; // ✅ Newly added

export const store = configureStore({
  reducer: {
    creditLedger: creditLedgerReducer,
    adEngagement: adEngagementReducer, // ✅ Tracks ads watched and credits
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
