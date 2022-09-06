import axios from "axios";
import { Product } from "../../types";

export const fetchProducts = async (api: string) => {
  try {
    const response = await axios.get<Product[]>(api);
    return response.data;
  } catch (error) {
    return error;
  }
};
