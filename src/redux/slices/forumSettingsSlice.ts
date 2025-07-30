// client/src/redux/slices/forumSettingsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ForumSettingsState {
  darkMode: boolean;
  ambientAudio: boolean;
  accessibilityMode: boolean;
}

const initialState: ForumSettingsState = {
  darkMode: true,
  ambientAudio: true,
  accessibilityMode: false,
};

const forumSettingsSlice = createSlice({
  name: 'forumSettings',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    toggleAmbientAudio(state) {
      state.ambientAudio = !state.ambientAudio;
    },
    toggleAccessibilityMode(state) {
      state.accessibilityMode = !state.accessibilityMode;
    },
  },
});

export const {
  toggleDarkMode,
  toggleAmbientAudio,
  toggleAccessibilityMode,
} = forumSettingsSlice.actions;

export default forumSettingsSlice.reducer;
