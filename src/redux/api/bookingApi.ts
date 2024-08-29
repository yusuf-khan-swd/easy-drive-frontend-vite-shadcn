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

    getSingleBooking: builder.query({
      query: (id: string) => ({
        url: `${BOOKING_URL}/${id}`,
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

    deleteMyBooking: builder.mutation({
      query: (id: string) => ({
        url: `${BOOKING_URL}/my-bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),

    deleteBooking: builder.mutation({
      query: (id: string) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useMyBookingQuery,
  useDeleteMyBookingMutation,
  useDeleteBookingMutation,
  useGetSingleBookingQuery,
} = bookingApi;
