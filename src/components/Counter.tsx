"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne } from "@/store/counter/counterSlice";
import React from "react";

export const Counter = () => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex items-center">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-200 w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-200 w-[100px] mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};