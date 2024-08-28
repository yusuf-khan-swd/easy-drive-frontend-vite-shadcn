import { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "@/components/easy-drive/DataTable";
import LoadingSpinner from "@/components/easy-drive/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { useGetAllCarsQuery } from "@/redux/api/carApi";
import { Link } from "react-router-dom";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

const ManageCars = () => {
  const { data: carsData, isLoading } = useGetAllCarsQuery(undefined);
  const cars = carsData?.data;
  console.log(cars);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage Cars</h2>
        <div>
          <Link to="/dashboard/admin/manage-cars/create-cars">
            <Button>Create</Button>
          </Link>
        </div>
      </div>
      <div className="w-full py-4">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default ManageCars;
