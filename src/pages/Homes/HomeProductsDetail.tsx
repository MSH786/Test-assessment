import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import Loader from "../../modules/Partials/Loader/Loader";
import { addToCart } from "../../reducers/cart/cartSlice";

import { GET_PRODUCTS } from "../../reducers/products/productsSlice";
import { Product, ProductItem } from "../../types";
import ProductsSubDetail from "./ProductsSubDetail";
const HomeProductsDetail = () => {
  const dispatch = useAppDispatch();

  const { loading, product } = useSelector((state: RootState) => state.product);
  useEffect(() => {
    dispatch(GET_PRODUCTS());
  }, []);
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      {!loading ? (
        product &&
        product.map((item: Product, i: number) => (
          <div className="lg:w-1/3 md:w-1/3 py-4 justify-center" key={i}>
            <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg p-8 w-full h-30 object-contain"
                src={item?.img}
                alt="product image"
              />
              <ProductsSubDetail
                item={item}
                handleAddToCart={handleAddToCart}
              />
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomeProductsDetail;
