import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  reducerPath: "userApi",
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/api/user/",
      providesTags: (result = [], error, arg) =>
        result.length
          ? result.map(({ id }) => ({ type: "User", id })) // Kullanıcı ID'lerine göre etiketle
          : [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const { useGetAllUsersQuery } = userApiSlice;
