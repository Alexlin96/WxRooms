import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Index extends Component {
  constructor() {
    super()
    this.state = {
      title: '首页',
      mes: ''
    }
  }

  componentWillMount () { }

  componentDidMount () {
    const { params } = this.$router // 获取路由传参参数

    if (typeof params.title !== 'undefined' && typeof params.mes !== 'undefined') {
      this.setState({
        title: decodeURIComponent(params.title), // encodeURIComponent 对url进行编码  decodeURIComponent()解码
        mes: decodeURIComponent(params.mes)
      },() => {
        Taro.setNavigationBarTitle({ // 设置标题
          title: this.state.title
        });
      })
    }
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index at-article__p'>
        {this.state.mes}
      </View>
    )
  }
}
