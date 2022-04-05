import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Season } from "../../types";
import type { RootState } from "../store";

type HikeState = {
  distance: number;
  season: Season;
};

const initialState: HikeState = {
  distance: 0,
  season: "spring",
};

export const hikeSlice = createSlice({
  name: "hike",
  initialState,
  reducers: {
    setDistance: (state, action: PayloadAction<number>) => {
      state.distance = action.payload;
    },
    setSeason: (state, action: PayloadAction<Season>) => {
      state.season = action.payload;
    },
  },
});

export const { setDistance, setSeason } = hikeSlice.actions;

export const selectDistance = (state: RootState) => state.hike.distance;
export const selectSeason = (state: RootState) => state.hike.season;

export const reducer = hikeSlice.reducer;
