import CarCard from "@/components/easy-drive/CarCard";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { useGetSingleCarQuery } from "@/redux/api/carApi";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCarQuery(id || "");
  const car = data?.data;

  console.log(car);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Car Details</h2>
      {car ? (
        <div className="grid grid-cols-1 gap-8">
          <CarCard car={car} detailsPage />
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No data available</h3>
      )}
    </div>
  );
};

export default CarDetails;
