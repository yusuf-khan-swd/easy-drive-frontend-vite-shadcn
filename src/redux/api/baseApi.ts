import { getBaseUrl } from "@/helpers/getBaseUrl ";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TOKEN = localStorage.getItem("easy-drive-token");

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    headers: { Authorization: `Bearer ${TOKEN}` },
  }),
  endpoints: () => ({}),
});
