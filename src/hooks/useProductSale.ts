import { useEffect, useState } from "react";
import useApi from "./useApi";

const useProductSale = () => {
  const [products, setProducts] = useState([]);
  const { productSale } = useApi();
  const { data: dataProduct, isLoading } = productSale();

  const getTopSale = () => {
    if (dataProduct && dataProduct.data.length <= 0) return;
    return products
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((product: any) => {
        return {
          ...product,
          price_sale: product.original_price - product.price,
        };
      })
      .sort((a, b) => b.price_sale - a.price_sale);
  };

  useEffect(() => {
    if (!dataProduct) return;
    setProducts(dataProduct.data);
  }, [dataProduct]);

  return { isLoading, products, getTopSale };
};

export default useProductSale;
