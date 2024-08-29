import { baseApi } from "./baseApi";

const USER_URL = "/users";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (carData) => ({
        url: `${USER_URL}/admin`,
        method: "POST",
        body: carData,
      }),
      invalidatesTags: ["user"],
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: `${USER_URL}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useCreateAdminMutation, useGetAllUsersQuery } = userApi;
