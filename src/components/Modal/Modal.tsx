import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../reducers/cart/cartSlice";
import { closingModal } from "../../reducers/modalSlice";
import { Cart } from "../../types";
import ProductDetail from "./ProductDetail";
import { checkout } from "../../reducers/cart/cartSlice";
import HandleClose from "./HandleClose";
import ModalFooter from "./ModalFooter";

const Modal = () => {
  const dispatch = useDispatch();
  const { cart, totalQuanity } = useSelector((state: RootState) => state.cart);
  const handleAddToCarts = (item: Cart, functionality: string) => {
    switch (functionality) {
      case "increment":
        dispatch(incrementQuantity(item));
        break;
      case "decrement":
        dispatch(decrementQuantity(item));
        break;
      case "remove":
        dispatch(removeItem(item));
        break;
    }
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {cart.length >= 1 ? (
              cart.map((item: Cart, i: number) => (
                <div
                  className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b-2"
                  key={i}
                >
                  <HandleClose
                    item={item}
                    handleAddToCarts={handleAddToCarts}
                  />
                  <ProductDetail
                    item={item}
                    handleAddToCarts={handleAddToCarts}
                  />
                </div>
              ))
            ) : (
              <div className="flex justify-center py-4">
                There is no record to display
              </div>
            )}
            <ModalFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
