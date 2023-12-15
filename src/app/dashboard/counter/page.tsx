import { Counter } from "@/components/Counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter",
  description: "A simple counter"
};

const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos del carrito</span>
      <Counter value={20} />
    </div>
  );
};

export default CounterPage;