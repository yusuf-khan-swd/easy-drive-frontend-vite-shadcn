import { ChangeEvent, FormEvent, useState } from "react";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  termsAccepted: boolean;
}

const SignUp = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }

    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms and conditions.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Redirect or clear the form
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white border p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

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

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone Number (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2 text-gray-700">
              I accept the{" "}
              <a href="/terms" className="text-blue-500 underline">
                Terms & Conditions
              </a>
            </span>
          </label>
          {errors.termsAccepted && (
            <p className="text-red-500 text-xs">{errors.termsAccepted}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 underline">
            Sign In Instead
          </a>
        </p>

        <div className="mt-4 text-sm text-center">
          <a href="/privacy" className="text-gray-600 underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/tos" className="text-gray-600 underline ml-2">
            Terms of Service
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
