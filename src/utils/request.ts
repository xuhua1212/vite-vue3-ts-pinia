
 import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

 const service = axios.create();

 service.interceptors.request.use(
     (config: AxiosRequestConfig) => {
         return config;
     },
     (error: any) => {
         Promise.reject(error);
     }
 );

 service.interceptors.response.use(
      (response: AxiosResponse) => {
        return Promise.resolve(response.data);
     },
     (error: any) => {
         return Promise.reject(error);
     }
 );

 export default service;