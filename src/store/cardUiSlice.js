import { createSlice } from "@reduxjs/toolkit";

const initialState = { cardIsVisible: false };

const cardUiSlice = createSlice({
  name: "CardUi",
  initialState,
  reducers: {
    toggleCard(state) {
      state.cardIsVisible = !state.cardIsVisible;
    },
  },
});

export const cardUiActions = cardUiSlice.actions;
export default cardUiSlice;
