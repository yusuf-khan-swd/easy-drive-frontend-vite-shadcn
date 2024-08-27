import { useCreateCarMutation } from "@/redux/api/carApi";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

interface CreateCarFormData {
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[];
  pricePerHour: number;
}

const CreateCar = () => {
  const [createCar, { isLoading }] = useCreateCarMutation();

  const [formData, setFormData] = useState<CreateCarFormData>({
    name: "",
    description: "",
    color: "",
    isElectric: false,
    features: [],
    pricePerHour: 0,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Type narrowing to check if the target is a checkbox
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const { checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFeaturesChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedFeatures = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prevData) => ({
      ...prevData,
      features: selectedFeatures,
    }));
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.description)
      newErrors.description = "Description is required.";
    if (!formData.color) newErrors.color = "Color is required.";
    if (!formData.pricePerHour)
      newErrors.pricePerHour = "Price per hour is required.";
    if (!formData.features.length) newErrors.features = "Features is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (validate()) {
        console.log("Form submitted:", formData);
        const { pricePerHour } = formData;
        const carData = { ...formData, pricePerHour: Number(pricePerHour) };

        const result = await createCar(carData).unwrap();
        toast.success(result?.message || "Car Created Successfully");
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "Car create failed");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="bg-white border p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add a Car</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-xs">{errors.description}</p>
          )}
        </div>

        {/* Color */}
        <div className="mb-4">
          <label htmlFor="color" className="block text-gray-700">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.color ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.color && (
            <p className="text-red-500 text-xs">{errors.color}</p>
          )}
        </div>

        {/* Is Electric */}
        <div className="mb-4 flex space-x-1">
          <input
            type="checkbox"
            id="isElectric"
            name="isElectric"
            checked={formData.isElectric}
            onChange={handleChange}
            className="mt-1"
          />
          <label htmlFor="isElectric" className="block text-gray-700">
            Electric Car
          </label>
        </div>

        {/* Features */}
        <div className="mb-4">
          <label htmlFor="features" className="block text-gray-700">
            Features
          </label>
          <select
            id="features"
            name="features"
            multiple
            value={formData.features}
            onChange={handleFeaturesChange}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.features ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="Air Conditioning">Air Conditioning</option>
            <option value="GPS">GPS</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Heated Seats">Heated Seats</option>
          </select>

          {errors.features && (
            <p className="text-red-500 text-xs">{errors.features}</p>
          )}
        </div>

        {/* Price Per Hour */}
        <div className="mb-4">
          <label htmlFor="pricePerHour" className="block text-gray-700">
            Price Per Hour
          </label>
          <input
            type="number"
            id="pricePerHour"
            name="pricePerHour"
            value={formData.pricePerHour}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.pricePerHour ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.pricePerHour && (
            <p className="text-red-500 text-xs">{errors.pricePerHour}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateCar;
