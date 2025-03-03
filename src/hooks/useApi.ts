import { useMemo } from "react";
import useSWR, { SWRConfiguration } from "swr";
import BaseApi from "~/apiConfig/baseApi";

const useApi = () => {
  const baseApi = new BaseApi();
  const swrConfig: SWRConfiguration = useMemo(() => {
    return {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateOnReconnect: false,
      refreshWhenOffline: true,
      refreshWhenHidden: false,
    };
  }, []);

  return {
    productSale: () =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useSWR(
        "/internal/1038653/products/YqhLPyoyqQGK36Iz-sIxz",
        async () => await baseApi.productSale(),
        { ...swrConfig }
      ),
    productStore: (param: { cursor: number; limit: number }) =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useSWR(
        `/collections/13567&cursor=${param.cursor}&limit=${param.limit}`,
        async () => await baseApi.productStore(param),
        { ...swrConfig }
      ),

    shoppeFlashSale: () =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useSWR(
        `/flash_sale/flash_sale_batch_get_items`,
        async () => await baseApi.shoppeFlashSale(),
        { ...swrConfig }
      ),
  };
};

export default useApi;
