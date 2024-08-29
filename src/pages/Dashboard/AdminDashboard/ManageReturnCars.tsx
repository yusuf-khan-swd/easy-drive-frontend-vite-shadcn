import { DataTable } from "@/components/easy-drive/DataTable";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useGetAllBookingsQuery } from "@/redux/api/bookingApi";
import { useReturnCarMutation } from "@/redux/api/carApi";
import { ColumnDef } from "@tanstack/react-table";
import toast from "react-hot-toast";

const ManageReturnCars = () => {
  const { data, isLoading } = useGetAllBookingsQuery(undefined);
  const bookings = data?.data;
  const [returnCar] = useReturnCarMutation();

  const handleReturnCar = async (id: string) => {
    try {
      const result = await returnCar(id).unwrap();
      toast.success(result?.message || "Car Return Successfully");
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Car Return failed");
    }
  };

  if (isLoading) return <LoadingSpinner />;

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "user.email",
      header: "User",
    },
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
        console.log(id);

        return (
          <div className="space-x-2">
            <Button onClick={() => handleReturnCar(id)}>Return</Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Manage Return Cars</h2>
      </div>
      <div className="w-full py-4">
        {!bookings || bookings?.length < 1 ? (
          <h2>No Data Available</h2>
        ) : (
          <DataTable columns={columns} data={bookings} />
        )}
      </div>
    </div>
  );
};

export default ManageReturnCars;
