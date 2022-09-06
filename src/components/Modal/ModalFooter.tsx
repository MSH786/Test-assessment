import React from "react";
import { useDispatch } from "react-redux";
import { checkout } from "../../reducers/cart/cartSlice";
import { closingModal } from "../../reducers/modalSlice";

const ModalFooter = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closingModal());
  };
  const Checkout = () => {
    dispatch(checkout());
    dispatch(closingModal());
  };
  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 hover:border-black hover:text-white sm:ml-3 sm:w-auto sm:text-sm"
        onClick={Checkout}
      >
        Checkout
      </button>
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md border border-black text-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-100 hover:border-black hover:text-white sm:ml-3 sm:w-auto sm:text-sm"
        onClick={handleClose}
      >
        Cancel
      </button>
    </div>
  );
};

export default ModalFooter;
