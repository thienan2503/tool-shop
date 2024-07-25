import useApi from "./useApi";

const useProductStore = () => {
  const { productStore } = useApi();

  const fetchData = (page: number) => {
    const { data: dataProduct, isLoading } = productStore({
      cursor: page,
      limit: 20,
    });
    return { dataProduct, isLoading };
  };

  return { fetchData };
};

export default useProductStore;
