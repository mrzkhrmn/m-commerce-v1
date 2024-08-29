import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupSuccess: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { signupSuccess } = authSlice.actions;

export default authSlice.reducer;
