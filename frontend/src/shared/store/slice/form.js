import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    form: null,
  },
  reducers: {
    saveFormData: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { saveFormData } = formSlice.actions;

export default formSlice.reducer;
