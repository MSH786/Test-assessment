import React from "react";
import { Cart, Product } from "../../types";
import Operations from "./Operations";

export interface ProductDetailInterface {
  item: Cart;
  handleAddToCarts: (item: Cart, operation: string) => void;
}
const ProductDetail: React.FC<ProductDetailInterface> = (props) => {
  return (
    <div className="sm:flex sm:items-start">
      <div className="columns-md flex">
        <div className="block relative w-20 h-20  rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full block"
            src={props.item?.img}
          />
        </div>

        <div className="flex px-3">
          <div>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {props.item?.name}
            </h3>
            <Operations
              item={props?.item}
              handleAddToCarts={props?.handleAddToCarts}
            />
          </div>

          <div className="justify-end px-5">
            <h3 className="text-gray-900 fw-bold text-xs tracking-widest title-font mb-1">
              $
              {props.item.totalPriceOfProduct
                ? props.item.totalPriceOfProduct
                : props.item.price}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
