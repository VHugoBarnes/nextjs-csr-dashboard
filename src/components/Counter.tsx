"use client";
import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState<number>(10);
  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex items-center">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-200 w-[100px] mr-2"
          onClick={() => setCount(prev => prev + 1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-200 w-[100px] mr-2"
          onClick={() => setCount(prev => prev - 1)}
        >
          -1
        </button>
      </div>
    </>
  );
};