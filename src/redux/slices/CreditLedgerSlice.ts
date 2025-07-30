import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CreditLedgerState {
  totalCredits: number;
  earnedFromAds: number;
  spentOnFeatures: number;
}

const initialState: CreditLedgerState = {
  totalCredits: 0,
  earnedFromAds: 0,
  spentOnFeatures: 0,
};

const creditLedgerSlice = createSlice({
  name: 'creditLedger',
  initialState,
  reducers: {
    earnCreditsFromAds: (state, action: PayloadAction<number>) => {
      state.totalCredits += action.payload;
      state.earnedFromAds += action.payload;
    },
    spendCredits: (state, action: PayloadAction<number>) => {
      state.totalCredits -= action.payload;
      state.spentOnFeatures += action.payload;
    },
    resetLedger: () => initialState,
  },
});

export const { earnCreditsFromAds, spendCredits, resetLedger } = creditLedgerSlice.actions;
export default creditLedgerSlice.reducer;
