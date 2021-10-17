import axios from "axios";
import _get from "lodash/get";

import historyHelper from "./history.helpers";
import { LocalStorage } from "services";

const endpoints: string = process.env.REACT_APP_API_URL || "";

const axiosInstance = axios.create({
  baseURL: endpoints,
});

const PROJECT_AUTH_TOKEN = "PROJECT_AUTH_TOKEN";

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    const authInfo = LocalStorage.get(PROJECT_AUTH_TOKEN);
    const refreshToken = _get(authInfo, "refreshToken", "");
    const accessToken = _get(authInfo, "token", "");
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      "Content-Type": config?.headers?.isFormData ? "multipart/form-data" : "application/json",
      refresh_token: refreshToken,
      locale: "en",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error.response.data.errors[0].message);
  },
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      LocalStorage.clear();
      historyHelper.push("/admin/sign-out");
      window.location.reload();
    }

    const _error = error.response.data.errors[0].message;

    return Promise.reject(_error);
  },
);

const fetch = axiosInstance;

export default fetch;
