import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
      {/* Cartoon Image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Error Cartoon"
        className="w-40 mb-6"
      />

      <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-400 max-w-md mb-6">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>

      <Link to="/">
        <button className="bg-[#B4F461] text-black px-6 py-3 rounded-xl font-semibold hover:bg-white transition">
          Go Back Home
        </button>
      </Link>

      <p className="mt-8 text-sm text-gray-500">
        © 2026 BOI POKA. All rights reserved.
      </p>
    </div>
  );
};

export default ErrorPage;
