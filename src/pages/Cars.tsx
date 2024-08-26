import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { useGetAllCarsQuery } from "@/redux/api/carApi";

const Cars = () => {
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  const cars = data.data;

  console.log(cars);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h1>Cars Page</h1>
    </div>
  );
};

export default Cars;
