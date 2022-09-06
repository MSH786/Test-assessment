export type CartItem = {
  cart: Cart[];
  totalQuanity: number;
};

export type Cart = {
  id: number;
  name: string;
  colour: string;
  price: number;
  img: string;
  cart: boolean;
  qty: number;
  totalPriceOfProduct: number;
};
export type ProductItem = {
  product: Product[];
  loading: boolean;
};

export type Product = {
  id: number;
  name: string;
  colour: string;
  price: number;
  img: string;
};
