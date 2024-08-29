// components/BookingPage/CarDetails.tsx

import { TCar } from "@/types/car";

interface CarDetailsProps {
  car: TCar;
}

const CarDetails = ({ car }: CarDetailsProps) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{car.description}</h2>
      {/* <img
        src={car.image}
        alt={car.description}
        className="w-full h-48 object-cover mb-4"
      /> */}
      <p className="text-gray-700">
        Features: Air Conditioning, GPS, Bluetooth, Heated Seats
      </p>
      <p className="text-gray-700">Insurance options available</p>
      <p className="text-gray-700">
        Cancellation policy: Free cancellation within 24 hours of booking
      </p>
    </div>
  );
};

export default CarDetails;
