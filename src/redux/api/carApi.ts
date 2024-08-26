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
    }),

    getSingleCar: builder.query({
      query: (id: string) => ({
        url: `${CAR_URL}/${id}`,
        method: "GET",
      }),
    }),

    updateCar: builder.mutation({
      query: (carData) => ({
        url: `${CAR_URL}/${carData._id}`,
        method: "PUT",
        body: carData,
      }),
    }),

    deleteCar: builder.mutation({
      query: (id: string) => ({
        url: `${CAR_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useCreateCarMutation } = carApi;
