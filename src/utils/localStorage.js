import Taro from '@tarojs/taro'

export default proStorage = {
  save(data = {}) {
    return Taro.setStorage({...data})
  },
  fetch(key) {
    return Taro.getStorage({ key }).then(res => res.data).catch(() => '')
  },
  remove(key) {
    return Taro.removeStorage({ key }).then(res => res.data).catch(() => '')
  }
}
