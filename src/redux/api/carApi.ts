import { baseApi } from "./baseApi";

const CAR_URL = "/cars";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: `${CAR_URL}/login`,
        method: "POST",
        body: loginData,
      }),
    }),

    signup: builder.mutation({
      query: (signupData) => ({
        url: `${CAR_URL}/signup`,
        method: "POST",
        body: signupData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = carApi;
