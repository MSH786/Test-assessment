import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import { ADD_TO_CART } from "../../modules/imagesUrl/url";
import { showingModal } from "../../reducers/modalSlice";

const HandleShow = () => {
  const dispatch = useAppDispatch();

  const { totalQuanity } = useSelector((state: RootState) => state.cart);
  const showModal = () => {
    dispatch(showingModal());
  };
  return (
    <div className="relative">
      <img
        alt="add to cart"
        className="object-cover object-center w-10 h-10 block"
        src={ADD_TO_CART}
      />
      <p
        className="rounded-lg bg-black text-white text-center w-4 h-4 left-7 text-xs top-0 absolute cursor-pointer"
        onClick={showModal}
      >
        {totalQuanity}
      </p>
    </div>
  );
};

export default HandleShow;
