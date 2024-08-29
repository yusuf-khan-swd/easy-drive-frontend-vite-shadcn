// components/BookingPage/SearchForm.tsx

import { ChangeEvent, FormEvent, useState } from "react";

interface SearchFormData {
  location: string;
  pickupDate: string;
  dropoffDate: string;
  carType: string;
}

const SearchForm = ({
  onSearch,
}: {
  onSearch: (data: SearchFormData) => void;
}) => {
  const [formData, setFormData] = useState<SearchFormData>({
    location: "",
    pickupDate: "",
    dropoffDate: "",
    carType: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border p-8 rounded shadow-md w-full max-w-md"
    >
      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="pickupDate" className="block text-gray-700">
          Pick-up Date
        </label>
        <input
          type="date"
          id="pickupDate"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dropoffDate" className="block text-gray-700">
          Drop-off Date
        </label>
        <input
          type="date"
          id="dropoffDate"
          name="dropoffDate"
          value={formData.dropoffDate}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="carType" className="block text-gray-700">
          Car Type
        </label>
        <select
          id="carType"
          name="carType"
          value={formData.carType}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm"
        >
          <option value="">Select a type</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Convertible">Convertible</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
