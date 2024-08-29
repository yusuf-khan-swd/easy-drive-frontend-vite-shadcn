// components/BookingPage/BookingConfirmation.tsx

interface BookingConfirmationProps {
  bookingDetails: any;
  onConfirm: () => void;
}

const BookingConfirmation = ({
  bookingDetails,
  onConfirm,
}: BookingConfirmationProps) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Booking Confirmation</h2>
      <p className="text-gray-700">Car: {bookingDetails.description}</p>
      <p className="text-gray-700">
        NID/Passport: {bookingDetails.nidOrPassport}
      </p>
      <p className="text-gray-700">
        Driving License: {bookingDetails.drivingLicense}
      </p>
      <p className="text-gray-700">
        Payment Info: {bookingDetails.paymentInfo}
      </p>
      <p className="text-gray-700">
        Options: {bookingDetails.options.join(", ")}
      </p>
      <button
        onClick={onConfirm}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Finalize Reservation
      </button>
    </div>
  );
};

export default BookingConfirmation;
