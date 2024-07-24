import axios from "axios";
const URL_TIKI = "https://api.tiki.vn/brickv2/api/public/internal";

const axiosConfig = axios.create({
  baseURL: URL_TIKI,
  timeout: 1000,
});

axiosConfig.interceptors.response.use(
  (response) => {
    if (response.headers.authorization) {
      response.data.token = response.headers.authorization;
    }

    return response.data || response;
  },
  async (error) => {
    const { response } = error;
    switch (response?.status) {
      case 404:
        console.log("404 error handler!");
        break;
      case 500:
        break;
      case 429:
        break;
      case 401:
        break;
      case 400:
        console.log("bad  request: ", response?.data?.message);
        break;
      default: {
        const dError = {
          status: response?.status,
          textStatus: response?.textStatus,
          message: response?.data?.message || "",
        };
        console.error("App Error:", dError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosConfig;
