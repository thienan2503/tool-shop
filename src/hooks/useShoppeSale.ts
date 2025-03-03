import { useEffect, useState } from "react";
import useApi from "./useApi";

const useShoppeSale = () => {
  const [products, setProducts] = useState([]);
  const { shoppeFlashSale } = useApi();
  const { data: dataProduct, isLoading } = shoppeFlashSale();

  const getTopSale = () => {
    if (dataProduct && dataProduct.data.length <= 0) return;
    return products
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((product: any) => {
        return {
          ...product,
        };
      })
  };

  useEffect(() => {
    if (!dataProduct) return;
    setProducts(dataProduct.data);
  }, [dataProduct]);

  return { isLoading, products, getTopSale };
};

export default useShoppeSale;
