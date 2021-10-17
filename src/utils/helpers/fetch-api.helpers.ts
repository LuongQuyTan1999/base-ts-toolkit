import { IResponse, QueryParamsApi } from "types";

import fetch from "./axios.helpers";

function deleteData<T>(url: string, optsHeader = {}): Promise<IResponse<T>> {
  return fetch.delete(url, {
    headers: {
      ...optsHeader,
    },
  });
}

function putData<T>(url: string, data = {}, optsHeader = {}): Promise<IResponse<T>> {
  return fetch.put(url, data, {
    headers: {
      ...optsHeader,
    },
  });
}

function patchData<T>(url: string, data = {}, optsHeader = {}): Promise<IResponse<T>> {
  return fetch.patch(url, data, {
    headers: {
      ...optsHeader,
    },
  });
}

function postData<T>(url: string, data = {}, optsHeader = {}): Promise<IResponse<T>> {
  return fetch.post(url, data, {
    headers: {
      ...optsHeader,
    },
  });
}

function getData<T>(url: string, optsHeader = {}, params?: Partial<QueryParamsApi>): Promise<IResponse<T>> {
  // eslint-disable-next-line no-console
  return fetch.get(url, {
    headers: {
      ...optsHeader,
    },
    params,
  });
}

export { getData, putData, patchData, postData, deleteData };
