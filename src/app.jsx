import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
// eslint-disable-next-line import/first
import { Provider } from '@tarojs/redux'
import configStore from './store'

import './app.less'
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss' // 全局引入

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore()

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [ // 路由
      'pages/home/index',
      'pages/message/index',
      'pages/message/mesroom/index',
      'pages/order/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: { // 底部导航栏
      color: '#bfbfbf',
      selectedColor: '#009fbf',
      backgroundColor: '#ffffff',
      list: [
        {
          pagePath: "pages/home/index",
          text: "主页",
          iconPath: "./assets/images/tabar/room.png",
          selectedIconPath: "./assets/images/tabar/room.png",
        },
        {
          pagePath: "pages/order/index",
          text: "订单",
          iconPath: "./assets/images/tabar/order.png",
          selectedIconPath: "./assets/images/tabar/order.png",
        },
        {
          pagePath: "pages/message/index",
          text: "消息",
          iconPath: "./assets/images/tabar/message.png",
          selectedIconPath: "./assets/images/tabar/message.png",
        },
        {
          pagePath: "pages/mine/mine",
          text: "我的",
          iconPath: "./assets/images/tabar/mine.png",
          selectedIconPath: "./assets/images/tabar/mine.png",
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
