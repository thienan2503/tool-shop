import useSWR from "swr";
import axiosConfig from "~/apiConfig/axiosConfig";
import { URL_TIKI } from "~/config/constant.config";

const useApi = () => {
  const fetcher = (url: string) =>
    axiosConfig({
      url: `${URL_TIKI + url}`,
      method: "GET",
    });
  const productSale = useSWR(
    "/1038653/products/YqhLPyoyqQGK36Iz-sIxz",
    fetcher
  );

  return { productSale };
};

export default useApi;
