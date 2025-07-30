import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdEngagementState {
  adsWatched: number;
  lastWatchedAt: string | null;
  rewardCredits: number;
}

const initialState: AdEngagementState = {
  adsWatched: 0,
  lastWatchedAt: null,
  rewardCredits: 0,
};

const adEngagementSlice = createSlice({
  name: "adEngagement",
  initialState,
  reducers: {
    logAdWatch(state) {
      state.adsWatched += 1;
      state.lastWatchedAt = new Date().toISOString();
      state.rewardCredits += 2; // 2 Forum Credits per ad
    },
    resetAdStats(state) {
      state.adsWatched = 0;
      state.lastWatchedAt = null;
      state.rewardCredits = 0;
    },
    redeemAdCredits(state) {
      state.rewardCredits = 0;
    },
  },
});

export const { logAdWatch, resetAdStats, redeemAdCredits } = adEngagementSlice.actions;
export default adEngagementSlice.reducer;
