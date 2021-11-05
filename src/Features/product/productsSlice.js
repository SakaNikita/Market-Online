import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "products",
  initialState: {
    selectedCatégories: "Légumes",
  },
  reducers: {
    filterCatégories: (state, action) => {
      state.selectedCatégories = action.payload;
    },
  },
});

export const getSelectedCatégories = (state) =>
  state.products.selectedCatégories;

export const { filterCatégories } = slice.actions;

export default slice.reducer;
