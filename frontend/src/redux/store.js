import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { userApiSlice } from "./api/userApiSlice";
import authReducer from "./reducers/authSlice.js";
import { authApiSlice } from "./api/authApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(userApiSlice.middleware)
      .concat(authApiSlice.middleware),
});
