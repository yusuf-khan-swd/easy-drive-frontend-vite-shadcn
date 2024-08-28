import { useGetAllCarsQuery } from "@/redux/api/carApi";
import { TCar } from "@/types/car";
import CarCard from "./CarCard";
import LoadingSpinner from "./LoadingSpinner";

const FeaturedCars = () => {
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  const cars = data?.data;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-8">
          Featured Cars
        </h2>
        {cars && cars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.slice(0, 3).map((car: TCar) => (
              <CarCard car={car} />
            ))}
          </div>
        ) : (
          <h3 className="text-2xl font-bold text-center">No cars available</h3>
        )}
      </div>
    </div>
  );
};

export default FeaturedCars;
