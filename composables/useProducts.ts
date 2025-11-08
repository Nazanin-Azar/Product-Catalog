import { useAsyncData } from "nuxt/app";
import type { Product } from "~/types/product";

export const useProducts = () => {
    const API_URL = 'https://dummyjson.com/products';

    const getProducts = (limit = 20, skip = 0) => {
        const key = `products-list-${limit}-${skip}`
         return useAsyncData<{ products: Product[], total: number }>(
      key,
      () => $fetch(`${API_URL}?limit=${limit}&skip=${skip}`)
    );
    }

     const getProductById = (id: number) => {
    const key = `product-${id}`;
    return useAsyncData<Product>(key, () => $fetch(`${API_URL}/${id}`));
    };
    
      return {
    getProducts,
    getProductById
  };
}