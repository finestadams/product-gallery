import axios from "axios";
import { Product } from "../types/products";

export const fetchProducts = async (): Promise<Product[]> => {
    // in prod, the url will be hidden in .env file, leaving it here for testing purpose
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};