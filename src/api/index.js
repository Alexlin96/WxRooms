/* eslint-disable */
const baseUrl = process.env.NODE_ENV === 'production' ? `${window.location.protocol}//${window.location.host}` : 'http://localhost:3005'
/* eslint-disable */

import request from '../utils/request';

/*
 * 用户
 */
// 登录
export function login(data) {
  return request({
    url: `${baseUrl}/user/login`,
    method: 'POST',
    data
  })
}



