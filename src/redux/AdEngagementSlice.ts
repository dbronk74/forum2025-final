import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AdEngagementState {
  totalViews: number;
  impressions: number;
  lastViewedAdId?: string;
}

const initialState: AdEngagementState = {
  totalViews: 0,
  impressions: 0,
  lastViewedAdId: undefined,
};

const adEngagementSlice = createSlice({
  name: 'adEngagement',
  initialState,
  reducers: {
    viewAd: (state, action: PayloadAction<string>) => {
      state.totalViews += 1;
      state.lastViewedAdId = action.payload;
    },
    trackImpression: (state) => {
      state.impressions += 1;
    },
    resetAdStats: () => initialState,
  },
});

export const { viewAd, trackImpression, resetAdStats } = adEngagementSlice.actions;
export default adEngagementSlice.reducer;
