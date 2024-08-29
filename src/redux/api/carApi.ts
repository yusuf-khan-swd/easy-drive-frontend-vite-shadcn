import { baseApi } from "./baseApi";

const CAR_URL = "/cars";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation({
      query: (carData) => ({
        url: `${CAR_URL}`,
        method: "POST",
        body: carData,
      }),
    }),

    getAllCars: builder.query({
      query: () => ({
        url: `${CAR_URL}`,
        method: "GET",
      }),
      providesTags: ["car"],
    }),

    getSingleCar: builder.query({
      query: (id: string) => ({
        url: `${CAR_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["car"],
    }),

    returnCar: builder.mutation({
      query: (carData) => ({
        url: `${CAR_URL}/return`,
        method: "PUT",
        body: carData,
      }),
      invalidatesTags: ["car"],
    }),

    updateCar: builder.mutation({
      query: (carData) => ({
        url: `${CAR_URL}/${carData._id}`,
        method: "PUT",
        body: carData,
      }),
      invalidatesTags: ["car"],
    }),

    deleteCar: builder.mutation({
      query: (id: string) => ({
        url: `${CAR_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["car"],
    }),
  }),
});

export const {
  useCreateCarMutation,
  useGetAllCarsQuery,
  useGetSingleCarQuery,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useReturnCarMutation,
} = carApi;
