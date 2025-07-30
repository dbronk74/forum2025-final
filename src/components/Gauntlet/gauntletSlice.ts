import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GauntletState {
  activeSpeaker: string | null;
  resonanceLevel: number;
  prestigeLevel: number;
  factionFocus: string | null;
  trialStatus: 'idle' | 'active' | 'paused' | 'completed';
  audiencePulse: number;
  cosmicInfluence: number;
  highlightAuraActive: boolean;
}

const initialState: GauntletState = {
  activeSpeaker: null,
  resonanceLevel: 50,
  prestigeLevel: 1,
  factionFocus: null,
  trialStatus: 'idle',
  audiencePulse: 0,
  cosmicInfluence: 0,
  highlightAuraActive: false,
};

const gauntletSlice = createSlice({
  name: 'gauntlet',
  initialState,
  reducers: {
    setActiveSpeaker(state, action: PayloadAction<string | null>) {
      state.activeSpeaker = action.payload;
    },
    setResonanceLevel(state, action: PayloadAction<number>) {
      state.resonanceLevel = Math.max(0, Math.min(100, action.payload));
    },
    incrementPrestigeLevel(state) {
      state.prestigeLevel += 1;
    },
    setFactionFocus(state, action: PayloadAction<string | null>) {
      state.factionFocus = action.payload;
    },
    setTrialStatus(state, action: PayloadAction<GauntletState['trialStatus']>) {
      state.trialStatus = action.payload;
    },
    updateAudiencePulse(state, action: PayloadAction<number>) {
      state.audiencePulse = action.payload;
    },
    setCosmicInfluence(state, action: PayloadAction<number>) {
      state.cosmicInfluence = Math.max(0, Math.min(100, action.payload));
    },
    toggleHighlightAura(state) {
      state.highlightAuraActive = !state.highlightAuraActive;
    },
    resetGauntletState() {
      return initialState;
    },
  },
});

export const {
  setActiveSpeaker,
  setResonanceLevel,
  incrementPrestigeLevel,
  setFactionFocus,
  setTrialStatus,
  updateAudiencePulse,
  setCosmicInfluence,
  toggleHighlightAura,
  resetGauntletState,
} = gauntletSlice.actions;

export default gauntletSlice.reducer;
