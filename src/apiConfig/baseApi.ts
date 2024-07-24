import { URL_TIKI } from '../config/constant.config';
import axiosConfig from './axiosConfig';

class BaseApi {
  uri: string;
  constructor() {
    this.uri = URL_TIKI;
  }

  productSale() {
    return axiosConfig({
      url: `${this.uri}/1041230/products/EPQgJZotSihqHuEHBp1xP`,
      method: 'GET',
    });
  }
}

export default BaseApi;
