import { URL_TIKI } from '../config/constant.config';
import axiosConfig from './axiosConfig';

class BaseApi {
  uri: string;
  constructor() {
    this.uri = URL_TIKI;
  }

  productSale() {
    return axiosConfig({
      url: `${this.uri}/1038653/products/YqhLPyoyqQGK36Iz-sIxz`,
      method: 'GET',
    });
  }
}

export default BaseApi;
