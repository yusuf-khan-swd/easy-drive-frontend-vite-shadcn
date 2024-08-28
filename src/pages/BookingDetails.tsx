import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { useCreateBookingMutation } from "@/redux/api/bookingApi";
import { useGetSingleCarQuery } from "@/redux/api/carApi";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const BookingDetails = () => {
  const [createBooking] = useCreateBookingMutation();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const { id } = useParams();
  const { data, isLoading } = useGetSingleCarQuery(id || "");
  const car = data?.data;

  if (isLoading) return <LoadingSpinner />;

  const {
    _id,
    name,
    description,
    color,
    status,
    isElectric,
    features,
    pricePerHour,
  } = car || {};

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!date) newErrors.date = "Date is required.";
    if (!time) newErrors.time = "Time is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (validate()) {
        const bookingData = { carId: _id, date, startTime: time };

        const result = await createBooking(bookingData).unwrap();
        toast.success(result?.message || "Car Booked Successfully");

        navigate("/dashboard/user/my-booking");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Car create failed");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Booking Details</h2>
      {car ? (
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
          {/* Form for selecting date and time */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border p-8 rounded shadow-md w-full max-w-md "
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Pick a DateTime
            </h2>

            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
                  errors.date ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.date && (
                <p className="text-red-500 text-xs">{errors.date}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Start Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
                  errors.time ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.time && (
                <p className="text-red-500 text-xs">{errors.time}</p>
              )}
            </div>
            {/* Submit button */}
            <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700">
              Confirm
            </button>
          </form>
          <div className="grid grid-cols-1 gap-8 flex-grow">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {name}
                </h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <p className="text-gray-700 mb-2">Color: {color}</p>
                <p className="text-gray-700 mb-2">
                  Electric: {isElectric ? "Yes" : "No"}
                </p>
                <p className="text-gray-900 font-bold mb-2">
                  Price: ${pricePerHour}/day
                </p>
                <p className="mb-2">
                  Status:{" "}
                  <span
                    className={`${
                      status === "available" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status}
                  </span>
                </p>
                <div className="mb-4">
                  {features && (
                    <div className="flex space-x-2">
                      <p>Features:</p>{" "}
                      <div className="flex flex-wrap space-x-2">
                        {features.map((feature: string, index: number) => (
                          <p
                            key={index}
                            className="bg-slate-300 px-2 py-1 rounded-lg text-sm m-1"
                          >
                            {feature}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No data available</h3>
      )}
    </div>
  );
};

export default BookingDetails;
