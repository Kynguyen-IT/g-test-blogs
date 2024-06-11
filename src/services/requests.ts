import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import ENV from '../constants/env';
import queryString from 'query-string';

const baseApiConfig = {
  baseURL: ENV.API_URL,
  headers: {
    'content-type': 'application/json',
  },
  timeout: 60000, // 60s
  paramsSerializer: (params: Record<string, any>) =>
    queryString.stringify(params),
};

const baseApiClient = axios.create(baseApiConfig);

const request = <T = any>({ ...options }: AxiosRequestConfig<any>) => {
  const onSuccess = (response: AxiosResponse<T, any>) => response;
  const onError = (error: { response: { status: number } }) => {
    return Promise.reject(error.response);
  };

  return baseApiClient(options).then(onSuccess).catch(onError);
};

export default request;
