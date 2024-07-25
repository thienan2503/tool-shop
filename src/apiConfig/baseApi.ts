import { URL_TIKI } from "../config/constant.config";
import axiosConfig from "./axiosConfig";

class BaseApi {
  uri: string;
  constructor() {
    this.uri = URL_TIKI;
  }

  productSale() {
    return axiosConfig({
      url: `${this.uri}/internal/1038653/products/YqhLPyoyqQGK36Iz-sIxz`,
      method: "GET",
    });
  }

  productStore(param: { cursor: number; limit: number }) {
    return axiosConfig({
      url: `${this.uri}/collections/13567`,
      method: "GET",
      params: {
        ...param,
      },
    });
  }
}

export default BaseApi;
