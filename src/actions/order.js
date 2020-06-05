import { ORDER_TYPE } from '@constants/order'

// eslint-disable-next-line import/prefer-default-export
export const dispatchOrderType = (data) => {
  return { // 同步写法
    type: ORDER_TYPE,
    data
  }
}
