interface Car {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  availability: string;
}

const featuredCars: Car[] = [
  {
    id: 1,
    name: "Toyota Corolla",
    image: "/images/toyota_corolla.jpg", // Replace with the actual image path
    description:
      "A reliable and fuel-efficient sedan perfect for city driving.",
    price: "$25/day",
    availability: "Available",
  },
  {
    id: 2,
    name: "Ford Mustang",
    image: "/images/ford_mustang.jpg", // Replace with the actual image path
    description:
      "Experience the thrill of driving with this iconic muscle car.",
    price: "$80/day",
    availability: "Limited Availability",
  },
  {
    id: 3,
    name: "Chevrolet Suburban",
    image: "/images/chevrolet_suburban.jpg", // Replace with the actual image path
    description: "Spacious and comfortable SUV, ideal for family road trips.",
    price: "$65/day",
    availability: "Available",
  },
  // Add more cars as needed
];

const FeaturedCars = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-8">
          Featured Cars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {car.name}
                </h3>
                <p className="text-gray-700 mb-4">{car.description}</p>
                <p className="text-gray-900 font-bold mb-2">
                  Price: {car.price}
                </p>
                <p
                  className={`mb-4 ${
                    car.availability === "Available"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {car.availability}
                </p>
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
