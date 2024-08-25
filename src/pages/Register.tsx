import React from "react";
import { Link } from "react-router-dom";
// import { useSignUpMutation } from "../redux/api/auth/authApi";
// import {
//   setEmail,
//   setName,
//   setPassword,
//   setRole,
// } from "../redux/features/registerSlice";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { RootState } from "../redux/store";
// import { useSignUPMutation } from "../redux/api/auth/authApi";

const Register = () => {
  // const dispatch = useAppDispatch();
  // const { name, email, password, role } = useAppSelector(
  //   (state: RootState) => state.register
  // );

  // const [signUP] = useSignUpMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const user = await signUP({ username: name, email, password, role });

    // console.log("our input", { name, email, password, role }, "output:", user);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-blue-700">
          Register
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              // value={name}
              // onChange={(e) => dispatch(setName(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              // value={email}
              // onChange={(e) => dispatch(setEmail(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              // value={role}
              // onChange={(e) => dispatch(setRole(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              // value={password}
              // onChange={(e) => dispatch(setPassword(e.target.value))}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-700 focus:border-green-700 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-700 hover:text-blue-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
