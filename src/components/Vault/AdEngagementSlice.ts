import { createSlice } from '@reduxjs/toolkit';

const adEngagementSlice = createSlice({
  name: 'adEngagement',
  initialState: { engagements: 0 },
  reducers: {
    trackEngagement: (state) => {
      state.engagements += 1;
    },
    resetEngagements: (state) => {
      state.engagements = 0;
    },
  },
});

export const { trackEngagement, resetEngagements } = adEngagementSlice.actions;
export default adEngagementSlice.reducer;