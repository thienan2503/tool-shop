import { URL_WEATHER } from "../config/constant.config";
import axiosConfig from "./axiosConfig";

class WeatherApi {
  uri: string;
  constructor() {
    this.uri = URL_WEATHER;
  }

  productSale() {
    return axiosConfig({
      url: `${URL_WEATHER}`,
      method: "GET",
    });
  }
}

export default WeatherApi;
