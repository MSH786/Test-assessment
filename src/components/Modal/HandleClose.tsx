import React from "react";
import { Cart } from "../../types";
export interface HandleCloseInterface {
  item: Cart;
  handleAddToCarts: (item: Cart, operation: string) => void;
}
const HandleClose: React.FC<HandleCloseInterface> = (props) => {
  return (
    <div
      className="flex justify-end cursor-pointer"
      onClick={() => props?.handleAddToCarts(props.item, "remove")}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
  );
};

export default HandleClose;
