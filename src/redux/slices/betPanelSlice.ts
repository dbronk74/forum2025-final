import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Bet {
  debateId: string;
  amount: number;
  selectedSide: 'A' | 'B';
  outcome?: 'win' | 'lose' | 'draw';
}

interface BetPanelState {
  activeBets: Bet[];
  resolvedBets: Bet[];
}

const initialState: BetPanelState = {
  activeBets: [],
  resolvedBets: [],
};

const betPanelSlice = createSlice({
  name: 'betPanel',
  initialState,
  reducers: {
    placeBet: (state, action: PayloadAction<Bet>) => {
      state.activeBets.push(action.payload);
    },
    resolveBet: (state, action: PayloadAction<{ debateId: string; outcome: 'win' | 'lose' | 'draw' }>) => {
      const index = state.activeBets.findIndex(bet => bet.debateId === action.payload.debateId);
      if (index !== -1) {
        const resolved = {
          ...state.activeBets[index],
          outcome: action.payload.outcome,
        };
        state.activeBets.splice(index, 1);
        state.resolvedBets.push(resolved);
      }
    },
    clearBets: () => initialState,
  },
});

export const { placeBet, resolveBet, clearBets } = betPanelSlice.actions;
export default betPanelSlice.reducer;
