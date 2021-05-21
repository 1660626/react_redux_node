import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: {
    default: "0",
  },
  reducers: {
    addNumber: (state, action) => {
      state.default = action.payload;
    },
  },
});

export default numberSlice.reducer;
export const { addNumber } = numberSlice.actions;

