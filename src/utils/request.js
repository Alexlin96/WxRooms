import Taro from '@tarojs/taro'
import proStorage from './localStorage'


export default async function requset(options) {
  // const token = await localStorage.fetch('token')
  console.log('token', proStorage)
  // const Authorization = 'jwt ' + (token || '');
  if (options.method === 'POST') {
    options.header = {
      'Content-Type': 'application/json'
    }
  }

  // try {
  //   options.header = {
  //     ...options.header,
  //     Authorization
  //   }
  // } catch (error) {
  //   options.header = {
  //     ...options.header
  //   }
  // }

  const {url, method = 'GET', data, header = {}} = options

  console.log('data', data)

  return Taro.request({url, method, data, header}).then(res => {
    console.log('数据', res)
    if (res.statusCode === 200 && res.data.code !== 401) { //请求成功
      return data
    } else if (res.data.code === 401) { // token失效 跳转到登录页
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