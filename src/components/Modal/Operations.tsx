import React from "react";
import { Cart } from "../../types";
export interface OperationsInterface {
  item: Cart;
  handleAddToCarts: (item: Cart, operation: string) => void;
}
const Operations: React.FC<OperationsInterface> = (props) => {
  return (
    <div className="flex">
      <span
        className="w-10 h-10 bg-green-500 flex justify-center text-lg px-4 py-1.5 text-white border-transparent rounded-full p-5 hover:bg-green-300 cursor-pointer"
        onClick={() => props.handleAddToCarts(props.item, "increment")}
      >
        +
      </span>
      <span className="pl-2 py-2">{props.item?.qty}</span>
      <span
        className="w-10 h-10 bg-red-500 flex justify-center mx-3 text-lg px-4 py-1 text-white border-transparent hover:bg-red-300 rounded-full p-5 cursor-pointer"
        onClick={() => props.handleAddToCarts(props.item, "decrement")}
      >
        -
      </span>
    </div>
  );
};

export default Operations;
