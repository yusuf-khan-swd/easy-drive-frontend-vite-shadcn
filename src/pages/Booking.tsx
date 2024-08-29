import BookingConfirmation from "@/components/easy-drive/Booking/BookingConfirmation";
import BookingForm from "@/components/easy-drive/Booking/BookingForm";
import CarDetails from "@/components/easy-drive/Booking/CarDetails";
import SearchForm from "@/components/easy-drive/Booking/SearchForm";
import SearchResults from "@/components/easy-drive/Booking/SearchResults";
import CarCard from "@/components/easy-drive/CarCard";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { useGetAllCarsQuery } from "@/redux/api/carApi";
import { TCar } from "@/types/car";
import { useState } from "react";

const Booking = () => {
  const [searchData, setSearchData] = useState<any | null>(null);
  // const [cars, setCars] = useState<TCar[]>([]);
  const [selectedCar, setSelectedCar] = useState<TCar | null>(null);
  const [bookingData, setBookingData] = useState<any | null>(null);

  const { data, isLoading } = useGetAllCarsQuery(undefined);
  const cars = data?.data;

  if (isLoading) return <LoadingSpinner />;

  const handleSearch = (data: any) => {
    setSearchData(data);
    // Fetch cars based on search criteria here
    // Example: setCars(fetchCars(data));
  };

  const handleSelectCar = (car: any) => {
    setSelectedCar(car);
  };

  const handleBook = (data: any) => {
    setBookingData(data);
  };

  const handleConfirmBooking = () => {
    // Handle booking confirmation
    console.log("Booking confirmed:", { ...bookingData, ...selectedCar });
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        {!searchData && <SearchForm onSearch={handleSearch} />}
        {searchData && !selectedCar && (
          <SearchResults cars={cars} onSelect={handleSelectCar} />
        )}
        {selectedCar && !bookingData && <CarDetails car={selectedCar} />}
        {selectedCar && !bookingData && <BookingForm onBook={handleBook} />}
        {bookingData && selectedCar && (
          <BookingConfirmation
            bookingDetails={{ ...bookingData, ...selectedCar }}
            onConfirm={handleConfirmBooking}
          />
        )}
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">
        Our Available Cars
      </h2>
      {cars && cars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car: TCar) => (
            <CarCard key={car?._id} car={car} />
          ))}
        </div>
      ) : (
        <h3 className="text-2xl font-bold text-center">No cars available</h3>
      )}
    </div>
  );
};

export default Booking;
