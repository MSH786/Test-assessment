import React from "react";
import {
  GET_PRODUCTS,
  update_product_data,
} from "../../reducers/products/productsSlice";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import Error from "../Error";
import { showingModal } from "../../reducers/modalSlice";
import { LOGO } from "../../modules/imagesUrl/url";
import { RootState, useAppDispatch } from "../../app/store";
import HandleShow from "./HandleShow";
const Header = () => {
  const dispatch = useAppDispatch();
  const { modal } = useSelector((state: RootState) => state.modal);

  const handleSearch = (value: string) => {
    let data = dispatch(update_product_data({ value }));
    if (!value) {
      dispatch(GET_PRODUCTS());
    }
  };

  return (
    <div>
      {modal ? <Modal /> : null}
      <nav className="bg-white border-gray-200 bg-gray-50 w-full top-0 sm:px-4 lg:px-4 sm:py-4 px-4 py-2.5 rounded dark:bg-gray-900 top-0 fixed">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <img src={LOGO} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Ecommerce
            </span>
          </div>
          <div className="flex md:order-2 ">
            <div className="relative md:block">
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by colour"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleSearch(e.target.value)
                }
              />
            </div>

            <HandleShow />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
