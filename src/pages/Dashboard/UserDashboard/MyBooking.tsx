import { DataTable } from "@/components/easy-drive/DataTable";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { Button } from "@/components/ui/button";
import {
  useDeleteMyBookingMutation,
  useMyBookingQuery,
} from "@/redux/api/bookingApi";
import { ColumnDef } from "@tanstack/react-table";
import toast from "react-hot-toast";

const MyBooking = () => {
  const { data, isLoading, isError } = useMyBookingQuery(undefined);
  const bookings = data?.data;
  const [deleteMyBooking] = useDeleteMyBookingMutation();

  const handleDelete = async (id: string) => {
    try {
      const result = await deleteMyBooking(id).unwrap();
      toast.success(result?.message || "Booking deleted Successfully");
    } catch (error: any) {
      console.log("Error: ", error);

      toast.error(error?.data?.message || "Booking delete failed");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "car.name",
      header: "Car",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
    {
      accessorKey: "startTime",
      header: "StartTime",
    },
    {
      accessorKey: "totalCost",
      header: "TotalCost",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const id = row.original._id;

        return (
          <div className="space-x-2">
            <Button variant="destructive" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Manage Booking</h2>
      </div>
      <div className="w-full py-4">
        {isError || !bookings || bookings?.length < 1 ? (
          <h2>No Data Available</h2>
        ) : (
          <DataTable columns={columns} data={bookings} />
        )}
      </div>
    </div>
  );
};

export default MyBooking;
