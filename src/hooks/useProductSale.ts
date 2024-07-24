import { useEffect, useState } from "react";
import BaseApi from "~/apiConfig/baseApi";

const useProductSale = () => {
  const [products, setProducts] = useState([]);

  const getTopSale = () => {
    if (products.length <= 0) return;
    return products
      .map((product: any) => {
        return {
          ...product,
          price_sale: product.original_price - product.price,
        };
      })
      .sort((a, b) => b.price_sale - a.price_sale);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const baseApi = new BaseApi();
        const response = await baseApi.productSale();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return { products, getTopSale };
};

export default useProductSale;
