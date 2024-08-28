import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { useGetSingleCarQuery } from "@/redux/api/carApi";
import { Link, useParams } from "react-router-dom";

const BookingDetails = () => {
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
  } = car;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Booking Details</h2>
      {car ? (
        <div className="grid grid-cols-1 gap-8">
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
              <Link to={`/booking/${_id}`}>
                <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700">
                  Confirm
                </button>
              </Link>
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
