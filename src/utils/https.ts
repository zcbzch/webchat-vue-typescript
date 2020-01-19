import axios from 'axios';

export interface ResponseData {
  code: number;
  message: string;
  data?: any;
}

// 创建实例
let https: any;
if (process.env.NODE_ENV === 'development') {
  https = axios.create({
    baseURL: '/api',
    timeout: 30000,
    headers: {},
  });
}

// 请求拦截器配置
https.interceptors.request.use((config: any): any => {
  // do something
  return config;
}, (error: any): any => {
  // do something
  console.error(error);
  return Promise.reject(error);
});


// 响应拦截器配置
https.interceptors.response.use((res: any): any => {
  // do something
  if (res.status === 200) {
    const data: ResponseData = res.data;
    if (data.code === 100000) {
      return data.data;
    } else {
      console.error('buiness error', data.message);
    }
  } else {
    console.error('res error!!!');
    return Promise.reject(new Error(res.data.message || 'Error'));
  }
},
(error: any): object => {
  return Promise.reject(error);
});

export default https;
