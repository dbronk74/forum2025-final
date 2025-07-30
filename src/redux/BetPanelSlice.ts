import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Bet {
  userId: string;
  amount: number;
  outcome: 'pro' | 'con';
}

interface BetPanelState {
  isOpen: boolean;
  bets: Bet[];
}

const initialState: BetPanelState = {
  isOpen: false,
  bets: [],
};

const betPanelSlice = createSlice({
  name: 'betPanel',
  initialState,
  reducers: {
    openBetPanel: (state) => {
      state.isOpen = true;
    },
    closeBetPanel: (state) => {
      state.isOpen = false;
    },
    placeBet: (state, action: PayloadAction<Bet>) => {
      state.bets.push(action.payload);
    },
    resetBets: (state) => {
      state.bets = [];
    },
  },
});

export const { openBetPanel, closeBetPanel, placeBet, resetBets } = betPanelSlice.actions;
export default betPanelSlice.reducer;
