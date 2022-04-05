import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../types";
import type { RootState } from "../store";

type BackpackState = {
  items: Item[];
  capacity: number;
};

const initialState: BackpackState = {
  capacity: 15,
  items: [],
};

export const backpackSlice = createSlice({
  name: "backpack",
  initialState,
  reducers: {
    setCapacity: (state, action: PayloadAction<number>) => {
      state.capacity = action.payload;
    },
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems, setCapacity } = backpackSlice.actions;

export const selectItems = (state: RootState) => state.backpack.items;
export const selectCapacity = (state: RootState) => state.backpack.capacity;
export const selectTotalQuantity = createSelector([selectItems], (items) =>
  items.reduce((acc, obj) => acc + obj.quantity, 0)
);
export const selectTotalWeight = createSelector([selectItems], (items) =>
  items.reduce((acc, obj) => acc + obj.weight * obj.quantity, 0)
);

export const reducer = backpackSlice.reducer;
