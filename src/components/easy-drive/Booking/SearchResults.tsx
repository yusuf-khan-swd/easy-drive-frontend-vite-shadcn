// components/BookingPage/SearchResults.tsx

interface Car {
  id: string;
  image: string;
  description: string;
  price: number;
}

const SearchResults = ({
  cars,
  onSelect,
}: {
  cars: Car[];
  onSelect: (car: Car) => void;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cars?.map((car) => (
        <div key={car.id} className="border p-4 rounded shadow-sm">
          <img
            src={car.image}
            alt={car.description}
            className="w-full h-32 object-cover mb-2"
          />
          <p className="text-lg font-bold">{car.description}</p>
          <p className="text-gray-700">${car.price} / hour</p>
          <button
            onClick={() => onSelect(car)}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
