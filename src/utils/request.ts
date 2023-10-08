import axios from 'axios';

const request = axios.create({
  baseURL: '',
  // headers: {
  //   appKey: '',
  //   appversion: '',
  // },
  timeout: 20000,
});

request.interceptors.request.use(async ({ ...config }) => {
  console.log(
    '🚀 ~ file: request.ts:17 ~ request.interceptors.request.use ~ config:',
    config,
    process.env.GATSBY_BASE_URL
  );

  return {
    ...config,
    baseURL: process.env.GATSBY_BASE_URL,
  };
});

request.interceptors.response.use(
  (resp) => {
    return resp?.data;
  },
  (error) => {
    console.log(error);

    throw error;
  }
);

export default request;
