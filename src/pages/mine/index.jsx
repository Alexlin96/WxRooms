import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import './index.less'
import { login } from '../../api/index';

export default class MIne extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      userInfo: {
        avatarUrl: 'https://cdn.jsdelivr.net/gh/Alexlin96/images/home/avatar.jpg', //用户头像
        nickName: 'alexlin', //用户昵称
      },
      // eslint-disable-next-line react/no-unused-state
      nav: {
        dataList: [
          {
            label: '评价',
            value: 'evaluate',
            icon: require('../../assets/images/mine-nav/mes.png')
          },
          {
            label: '报表',
            value: 'report',
            icon: require('../../assets/images/mine-nav/me.png')
          },
          {
            label: '设置',
            value: 'setting',
            icon: require('../../assets/images/mine-nav/set.png')
          }
        ]
      } 
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 跳转对应页面
  goNavFn(item) {
    Taro.navigateTo({
      url: `/pages/mine/${item.value}/index`
    })
  }

  // 登录
  loginFn() {
    console.log('登录点击')
    const params = {
      name: 'admin',
      password: 'lzq123456'
    }
    login(params).then(res => {
      console.log('请求的值', res)
    })
  }

  config = {
    navigationBarTitleText: '我的'
  }


  render () {
    return (
      <View className='mine'>
        <View className='header'>
          <View className='user'>
            <Image className='header-logo' src={this.state.userInfo.avatarUrl} />
            <Text className='username'>{ this.state.userInfo.nickName }</Text>
          </View>
        </View>
        <View className='navbar'>
          {
            this.state.nav.dataList.map(item => {
              return (
                <View className='nav-item' key={item.value} onClick={this.goNavFn.bind(this, item)}>
                  <Image className='nav-icon' src={item.icon} />
                  <Text className='nav-title'>{ item.label }</Text>
                </View>
              )
            })
          }
        </View>
        <View className='opt'>
          <Button className='login-btn' onClick={this.loginFn.bind(this)}>登录</Button>
        </View>
      </View>
    )
  }
}
