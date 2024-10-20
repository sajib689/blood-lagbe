"use client";

import { HeartCrack } from "lucide-react";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <HeartCrack className="w-20 h-20 text-red-500" />
      <h1 className="text-3xl font-bold">Something went wrong!</h1>
    </div>
  );
};

export default ErrorPage;
