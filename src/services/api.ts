// tslint:disable:no-console
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Cria um client do Axios
 */
export const api: any = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMzkiLCJuYmYiOjE2NDMyMzE5NDEsImV4cCI6MTY0NTgyMzk0MSwiaWF0IjoxNjQzMjMxOTQxfQ.d4nVa2dzLdOT5TrKMBFrBUexy8IpaF_AQoP1dP0ez88',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

/**
 * Wrapper de requisição com ações de sucesso/erro
 */
const request = (options: Partial<AxiosRequestConfig>) => {
  const onSuccess = (response: AxiosResponse) => {
    console.debug('Request Successful!', response);
    return response.data;
  };

  const onError = (error: AxiosError) => {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Requisição aconteceu mas o servidor respondeu com algo diferente de status code 2xx
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      // Aconteceu algum erro inesperado quando tentava montar a requisição
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error.response || error.message);
  };
  return api(options).then(onSuccess).catch(onError);
};

export default request;
