import { createSlice } from "@reduxjs/toolkit";
import { CartItem, Cart } from "../../types";
const initialState: CartItem = {
  cart: [],
  totalQuanity: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item?.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
        state.totalQuanity++;
      } else {
        state.cart.push({
          ...action.payload,
          qty: 1,
        });
        state.totalQuanity++;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item: Cart) => item.id === action.payload.id
      );
      if (item != undefined) {
        item.qty++;
        item.totalPriceOfProduct = item.qty * action.payload.price;
        state.totalQuanity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item: Cart) => item.id === action.payload.id
      );
      if (item != undefined) {
        if (item.qty === 1) {
          item.qty = 1;
        } else {
          item.qty--;
          item.totalPriceOfProduct = item.qty * action.payload.price;
          state.totalQuanity--;
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
      state.totalQuanity--;
    },
    checkout: (state) => {
      state.totalQuanity = 0;
      state.cart.length = 0;
    },
  },
});
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  checkout,
} = cartSlice.actions;

export default cartSlice.reducer;
