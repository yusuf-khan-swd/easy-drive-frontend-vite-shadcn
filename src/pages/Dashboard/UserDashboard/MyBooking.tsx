import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { useMyBookingQuery } from "@/redux/api/bookingApi";

const MyBooking = () => {
  const { data, isLoading } = useMyBookingQuery(undefined);
  const bookings = data?.data;

  console.log(bookings);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h1>My Booking</h1>
    </div>
  );
};

export default MyBooking;
