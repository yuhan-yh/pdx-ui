/*
 * @Author: Su
 * @Date: 2022-06-20 15:09:46
 * @LastEditTime: 2022-06-20 15:11:37
 * @LastEditors: su
 * @Description: http请求
 * @FilePath: \nanhai_constructionIOC\src\utils\http.js
 */
import axios from '@/utils/axios';
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}`, {
        ...params
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} headers [请求头]
 */
export function post(url, params, headers) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}`, params, headers)
      .then((res) => {
        resolve(res.data || res);
      })
      .catch((err) => {
        reject(err.data || err.Data);
      });
  });
}
