import { useQuery } from "@tanstack/react-query";

import { Product } from "../types/products";
import { fetchProducts } from "../api/product";


export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};