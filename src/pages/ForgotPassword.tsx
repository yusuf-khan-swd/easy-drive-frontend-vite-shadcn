import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword = () => {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Password reset request for:", formData.email);
      // Here you would typically call an API to handle the password reset request
      setSuccessMessage(
        "If an account with that email exists, you will receive an email with instructions to reset your password."
      );
      setFormData({ email: "" });
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <form
        className="bg-white border p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center font-bold mb-6">Forgot Password</h2>

        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}

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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Send Reset Link
        </button>

        <p className="mt-4 text-center">
          Remembered your password?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Sign In
          </Link>
        </p>

        <div className="mt-4 text-sm text-center">
          <Link to="/privacy" className="text-gray-600 underline">
            Privacy Policy
          </Link>{" "}
          |
          <Link to="/tos" className="text-gray-600 underline ml-2">
            Terms of Service
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
