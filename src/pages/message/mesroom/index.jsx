import Taro, { Component } from '@tarojs/taro'
import { View, Image, Textarea } from '@tarojs/components'
import './index.less'
import tipPng from '../../../assets/images/mine-nav/set.png'
import sendPng from '../../../assets/images/messroom/send.png'

export default class mesroom extends Component {
  constructor() {
    super()
    this.state = {
      title: '首页',
      messageList: [],
      sendMesage: ''
    }
  }

  componentWillMount () { }

  componentDidMount () {
    const { params } = this.$router // 获取路由传参参数

    if (typeof params.title !== 'undefined' && typeof params.mes !== 'undefined') {
      const newMessageData = {
        waiter: [decodeURIComponent(params.mes)],
        user: ['好的~ 我知道了']
      }
      this.setState({
        title: decodeURIComponent(params.title), // encodeURIComponent 对url进行编码  decodeURIComponent()解码
        messageList: [...this.state.messageList, newMessageData]
      },() => {
        Taro.setNavigationBarTitle({ // 设置标题
          title: this.state.title
        });
      })
    }
   }

  componentDidUpdate() {
  }

  componentWillUnmount () { }

  

  componentDidShow () { }

  componentDidHide () { }

  // 输入框变化
  sendMessageChangeFn(e) {
    this.setState({
      sendMesage: e.target.value
    })
  }

  // 发送消息
  sendMessageFn() {
    const newMessageData = {
      waiter: [],
      user: [this.state.sendMesage]
    }
    this.setState({
      messageList: [...this.state.messageList, newMessageData],
    },() => {
      this.setState({
        sendMesage: ''
      })
    })
    clearTimeout(this.timer) // 函数防抖
    this.timer = setTimeout(() => {
      const newMessageData_1 = {
        waiter: ['正在处理, 请稍后'],
        user: []
      }
      this.setState({
        messageList: [...this.state.messageList, newMessageData_1]
      })
      
    }, 3000)
  }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='mesroom'>
        {
          this.state.messageList.map((item, index) => {
            return (
              <View className='mess-item' key={index}>
                {
                  item.waiter.map((childItem, childIndex) => {
                    return (
                      <View className='mess-item-waiter' key={childIndex}>
                        <Image className='mess-waiter-img' src={tipPng}></Image>
                        <View className='mess-waiter-box'>
                          {childItem}
                        </View>
                      </View>
                    )
                  })
                }
                {
                  item.user.map((childItem, childIndex) => {
                    return (
                      <View className='mess-item-user' key={childIndex}>
                        <Image className='mess-user-img'src='https://cdn.jsdelivr.net/gh/Alexlin96/images/home/avatar.jpg'></Image>
                        <View className='mess-user-box'>
                          {childItem}
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
        <View className='empty-box'></View>
        <View className='send-box'>
          <Textarea value={this.state.sendMesage} onChange={this.sendMessageChangeFn.bind(this)} />
          <Image className='send-icon' src={sendPng} onClick={this.sendMessageFn.bind(this)}></Image>
        </View>
      </View>
    )
  }
}
