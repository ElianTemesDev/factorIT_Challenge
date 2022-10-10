import { useEffect, useState } from "react";
import { getProducts } from "../utils/Api";

export const useProducts = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, [])
  return products
}