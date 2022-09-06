import React from "react";
import { Product } from "../../types";
export interface SubProductDetailInterface {
  item: Product;
  handleAddToCart: (item: Product) => void;
}
const ProductsSubDetail: React.FC<SubProductDetailInterface> = (props) => {
  return (
    <div className="px-5 pb-5">
      <h3 className="text-gray-500  text-xl tracking-tight dark:text-white">
        {props?.item?.name}
      </h3>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          ${props?.item?.price}
          <p
            className={`rounded-lg text-1xl text-center w-4 h-4 left-7 text-xs cursor-pointer`}
          >
            {props?.item?.colour}
          </p>
        </span>
        <a
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => props.handleAddToCart(props?.item)}
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductsSubDetail;
