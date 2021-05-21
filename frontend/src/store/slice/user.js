import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
const { loginSuccess } = userSlice.actions;

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      dispatch(loginSuccess({ username }));
    } catch (e) {
      return console.error(e.message);
    }
  };
