import { baseApi } from "./baseApi";

const BOOKING_URL = "/bookings";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: `${BOOKING_URL}`,
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["booking"],
    }),

    getAllBookings: builder.query({
      query: () => ({
        url: `${BOOKING_URL}`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    myBooking: builder.query({
      query: () => ({
        url: `${BOOKING_URL}/my-bookings`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useMyBookingQuery,
} = bookingApi;
