import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  reducerPath: "authApi",
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({ url: "/api/auth/login", method: "POST", body: data }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "/api/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApiSlice;
