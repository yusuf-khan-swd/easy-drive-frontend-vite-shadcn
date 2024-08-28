import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { useGetAllCarsQuery } from "@/redux/api/carApi";
import { TCar } from "@/types/car";

const Cars = () => {
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  const cars = data?.data;

  console.log(cars);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h1>Cars Page</h1>
      {cars && cars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car: TCar) => (
            <div
              key={car._id}
              className="bg-white rounded-lg shadow-md overflow-hidden border"
            >
              {/* <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {car.name}
                </h3>
                <p className="text-gray-700 mb-4">{car.description}</p>
                <p className="text-gray-900 font-bold mb-2">
                  Price: ${car.pricePerHour}/day
                </p>
                <p
                  className={`mb-4 ${
                    car.status === "available"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {car.status}
                </p>
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No cars available</h3>
      )}
    </div>
  );
};

export default Cars;
