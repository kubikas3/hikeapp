import { configureStore } from "@reduxjs/toolkit";
import { reducer as backpackReducer } from "./slices/backpackSlice";
import { reducer as hikeReducer } from "./slices/hikeSlice";

export const store = configureStore({
  reducer: {
    backpack: backpackReducer,
    hike: hikeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
