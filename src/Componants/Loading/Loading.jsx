"use client";
import React from "react";
import { RotateLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen flex justify-center items-center">
        <RotateLoader color="#fd7d07"></RotateLoader>
      </div>
    </div>
  );
};

export default Loading;
