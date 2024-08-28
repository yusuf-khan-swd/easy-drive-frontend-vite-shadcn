import { TCar } from "@/types/car";
import { Link } from "react-router-dom";

const CarCard = ({ car }: { car: TCar }) => {
  const {
    _id,
    name,
    description,
    color,
    status,
    isElectric,
    // features,
    pricePerHour,
  } = car;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border">
      {/* <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      /> */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700 mb-2">Color: {color}</p>
        <p className="text-gray-700 mb-2">
          Electric: {isElectric ? "Yes" : "No"}
        </p>
        <p className="text-gray-900 font-bold mb-2">
          Price: ${pricePerHour}/day
        </p>
        <p className={`mb-4 `}>
          Status:{" "}
          <span
            className={`${
              status === "available" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </span>
        </p>
        <Link to={`/car/${_id}`}>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
