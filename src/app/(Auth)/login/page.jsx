"use client";
import { AuthContext } from "@/Context/AuthContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";

const Login = () => {
  const [eye, setEye] = useState(true);
  const { userLogIn, userSignInGoogle } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogIn = (data) => {
    userLogIn(data.email, data.password)
      .then(() => {
        toast.success("Your Account LogIn Successful.");
      })
      .catch((err) => toast.error(err?.message));
  };

  const handleLogInGoogle = () => {
    userSignInGoogle()
      .then(() => {
        toast.success("Your Account LogIn Successful.");
      })
      .catch((err) => toast.error(err?.message));
  };

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="mt-10 md:w-3/8 mx-auto rounded-box p-4 border">
        <form onSubmit={handleSubmit(handleLogIn)} className="space-y-4">
          <h1 className="text-4xl font-bold">Welcome Back</h1>
          <p className="text-base">LogIn with CoffeeGarder</p>

          {/* Email */}
          <div className="flex flex-col">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required!" })}
              className="input outline-0 border p-2 rounded w-full"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="label font-semibold">Password</label>
            <div className="relative">
              <input
                type={eye ? "password" : "text"}
                {...register("password", { required: "Password is required!" })}
                placeholder="Enter password"
                className="input outline-0 border p-2 rounded w-full"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer text-xl"
                onClick={() => setEye(!eye)}
              >
                {eye ? <AiTwotoneEye /> : <AiTwotoneEyeInvisible />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <Link
              className="text-fuchsia-600 font-semibold underline"
              href="/forgetPassword"
            >
              Forget Password?
            </Link>
          </div>

          <button className="btn md:w-full btn-neutral mt-4 w-full">
            LogIn
          </button>
        </form>

        {/* OR Separator */}
        <div className="flex justify-center items-center my-4">
          <span className="border-b w-full mr-2 border-gray-300"></span>
          <span>or</span>
          <span className="border-b w-full ml-2 border-gray-300"></span>
        </div>

        <button
          onClick={handleLogInGoogle}
          className="btn md:w-full btn-neutral mb-4 w-full"
        >
          Login with Google
        </button>

        <p className="text-center">
          Don&apos;t have an account? Please{" "}
          <Link
            className="text-fuchsia-600 font-semibold underline"
            href="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
