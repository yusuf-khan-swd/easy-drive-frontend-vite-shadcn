import { baseApi } from "./baseApi";

const BOOKING_URL = "/bookings";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: `${BOOKING_URL}/login`,
        method: "POST",
        body: loginData,
      }),
    }),

    signup: builder.mutation({
      query: (signupData) => ({
        url: `${BOOKING_URL}/signup`,
        method: "POST",
        body: signupData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = bookingApi;
