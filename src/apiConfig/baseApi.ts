import { URL_SHOPPE, URL_TIKI } from "../config/constant.config";
import axiosConfig from "./axiosConfig";

class BaseApi {
  uri: string;
  constructor() {
    this.uri = URL_TIKI;
  }

  productSale() {
    return axiosConfig({
      url: `${URL_TIKI}/internal/1038653/products/YqhLPyoyqQGK36Iz-sIxz`,
      method: "GET",
    });
  }

  productStore(param: { cursor: number; limit: number }) {
    return axiosConfig({
      url: `${URL_TIKI}/collections/13567`,
      method: "GET",
      params: {
        ...param,
      },
    });
  }

  shoppeFlashSale() {
    return axiosConfig({
      url: `${URL_SHOPPE}/flash_sale/flash_sale_batch_get_items`,
      method: "POST",
      data: {
        categoryid: 0,
        promotionid: 30114155401217,
        limit: 16,
        with_dp_items: true,
        itemids: [
          2574299348, 7938937357, 24225172306, 1998487383, 24921943931,
          23044413278, 23485992800, 22977746905, 22356537017, 25957662767,
          21448859274, 4074576501, 5583547333, 26752322142, 24610681914,
          22582333862,
        ],
      },
    });
  }
}

export default BaseApi;
