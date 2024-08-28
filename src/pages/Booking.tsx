import CarCard from "@/components/easy-drive/CarCard";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { useGetAllCarsQuery } from "@/redux/api/carApi";
import { TCar } from "@/types/car";

const Booking = () => {
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  const cars = data?.data;

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">
        Our Available Cars
      </h2>
      {cars && cars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car: TCar) => (
            <CarCard car={car} />
          ))}
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No cars available</h3>
      )}
    </div>
  );
};

export default Booking;
