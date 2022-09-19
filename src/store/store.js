import { configureStore } from "@reduxjs/toolkit";

import cardSlice from "./cardSlice";
import cardUiSlice from "./cardUiSlice";
const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
    cardUi: cardUiSlice.reducer,
  },
});

export default store;
