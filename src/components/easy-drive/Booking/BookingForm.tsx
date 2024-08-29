// components/BookingPage/BookingForm.tsx

import { ChangeEvent, FormEvent, useState } from "react";

interface BookingFormData {
  nidOrPassport: string;
  drivingLicense: string;
  paymentInfo: string;
  options: string[];
}

const BookingForm = ({
  onBook,
}: {
  onBook: (data: BookingFormData) => void;
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    nidOrPassport: "",
    drivingLicense: "",
    paymentInfo: "",
    options: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedOptions = checked
        ? [...formData.options, value]
        : formData.options.filter((option) => option !== value);
      setFormData({ ...formData, options: updatedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onBook(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border p-8 rounded shadow-md w-full max-w-md"
    >
      <div className="mb-4">
        <label htmlFor="nidOrPassport" className="block text-gray-700">
          NID/Passport
        </label>
        <input
          type="text"
          id="nidOrPassport"
          name="nidOrPassport"
          value={formData.nidOrPassport}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="drivingLicense" className="block text-gray-700">
          Driving License
        </label>
        <input
          type="text"
          id="drivingLicense"
          name="drivingLicense"
          value={formData.drivingLicense}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="paymentInfo" className="block text-gray-700">
          Payment Information
        </label>
        <input
          type="text"
          id="paymentInfo"
          name="paymentInfo"
          value={formData.paymentInfo}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Additional Options</label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="GPS"
              checked={formData.options.includes("GPS")}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">GPS</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="checkbox"
              value="Child Seat"
              checked={formData.options.includes("Child Seat")}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2">Child Seat</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
