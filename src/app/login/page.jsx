"use client";

import { loginUser } from "@/redux/slices/authSlice";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, error, user, token, message } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const { email, password } = data;
    if (isLoading) return;
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (user && token) {
      reset();
      router.push("/"); // Redirect to home
    }
    if (error) {
      toast.error(message || "Login failed");
    }
  }, [user, token, error, reset, router, message]);

  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="w-full max-w-[1320px] h-[80%] bg-white lg:rounded-lg lg:shadow-lg overflow-hidden flex">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Sign In</h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-[450px] w-full mx-auto"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                email
              </label>
              <input
                {...register("email", { required: "email is required" })}
                type="text"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                PASSWORD
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  {...register("rememberMe")}
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 rounded border-gray-300 text-[#ff6b6b] focus:ring-[#ff6b6b]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] focus:ring-offset-2"
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 bg-gradient-to-br from-primary to-primary/80 p-8 hidden lg:flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">Welcome to login</h2>
          <p className="mb-4">Don&#39;t have an account?</p>
          <button className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-[#ff6b6b] transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
