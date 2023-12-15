"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import React from "react";

interface Props {
  value: number;
};

export const Counter = ({ value }: Props) => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);

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