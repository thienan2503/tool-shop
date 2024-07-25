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
      refreshInterval: 0,
    };
  }, []);

  return {
    productSale: () =>
      useSWR(
        "/internal/1038653/products/YqhLPyoyqQGK36Iz-sIxz",
        async () => await baseApi.productSale(),
        { ...swrConfig }
      ),
    productStore: (param: { cursor: number; limit: number }) =>
      useSWR(
        `/collections/13567&cursor=${param.cursor}&limit=${param.limit}`,
        async () => await baseApi.productStore(param),
        { ...swrConfig }
      ),
  };
};

export default useApi;
