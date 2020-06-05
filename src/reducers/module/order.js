import { ORDER_TYPE } from '@constants/order'

// state
const INITIAL_STATE = {
  orderTypeVal: 0
}

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ORDER_TYPE:
      return {
        ...state,
        orderTypeVal: action.data
      }
    default:
      return state
  }
} 