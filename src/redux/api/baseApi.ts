import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TOKEN = localStorage.getItem("easy-drive-token");

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    headers: { Authorization: `Bearer ${TOKEN}` },
  }),
  endpoints: () => ({}),
});
