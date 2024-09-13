import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  reducerPath: "productApi",
  endpoints: (builder) => ({
    getMenProducts: builder.query({ query: () => "/api/product/men" }),
  }),
});

export const { useGetMenProductsQuery } = productApiSlice;
