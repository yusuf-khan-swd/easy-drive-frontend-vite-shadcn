import { useLoginMutation } from "@/redux/api/authApi";
import { setToken, setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { jwtDecode } from "jwt-decode";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

    if (!formData.password) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      if (validate()) {
        console.log("Logging in with:", formData);
        // Perform login operation
        // Redirect to dashboard if successful

        const result = await login(formData).unwrap();

        const token = result?.data?.token;
        const user = result?.data?.user;
        dispatch(setToken(token));
        dispatch(setUser(user));
        localStorage.setItem("easy-drive-token", token);

        toast.success("Login Success!!");
        navigate("/dashboard");

        const decodedToken = jwtDecode(token);
        console.log({ decodedToken });
      }
    } catch (error: any) {
      console.log("Error: ", error);
      toast.error(error?.data?.message || "login failed");
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <form
        className="bg-white border p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>

        <p className="mt-4 text-center">
          <Link to="/forgot-password" className="text-blue-500 underline">
            Forgot Password?
          </Link>
        </p>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Sign Up Instead
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

export default Login;
