import { DataTable } from "@/components/easy-drive/DataTable";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useMyBookingQuery } from "@/redux/api/bookingApi";
import { ColumnDef } from "@tanstack/react-table";

const MyBooking = () => {
  const { data, isLoading } = useMyBookingQuery(undefined);
  const bookings = data?.data;

  if (isLoading) return <LoadingSpinner />;

  const columns: ColumnDef<any>[] = [
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
        console.log(id);

        return (
          <div className="space-x-2">
            <Button>Edit</Button>
            <Button
              variant="destructive"
              // onClick={() => handleDelete(id)}
            >
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
        <DataTable columns={columns} data={bookings} />
      </div>
    </div>
  );
};

export default MyBooking;
