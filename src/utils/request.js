import Taro from '@tarojs/taro'
import localStorage from './localStorage'


export default async function requset(options) {
  const token = await localStorage.fetch('token')
  const Authorization = 'jwt ' + (token || '');
  if (options.method === 'POST') {
    options.header['Content-Type'] = 'application/json'
  }

  try {
    options.header = {
      ...options.header,
      Authorization
    }
  } catch (error) {
    options.header = {
      ...options.header
    }
  }

  const {url, method = 'GET', data, header = {}} = options

  return Taro.request({url, method, data, header}).then(async res => {
    const {code} = res
    if (code === 200) { //请求成功
      return res
    } else if (code === 401) { // token失效 跳转到登录页
      Taro.showToast({
        title: 'token已过期, 请重新登录',
        icon: 'none'
      })
      Taro.navigateTo({
        url: `pages/mine/index`
      })
    }
  })
}