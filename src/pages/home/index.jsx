import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Form, Input, Text, Button  } from '@tarojs/components'
import './index.less'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      banner: {
        imgUrlList: [
          require('../../assets/images/banner/b1.jpg'),
          require('../../assets/images/banner/b2.jpg'),
          require('../../assets/images/banner/b3.jpg')
        ],
        circular: true, // 衔接滑动
        autoplay: true,  //自动轮播
        interval: 5000,
        duration: 1000
      },
      // eslint-disable-next-line react/no-unused-state
      searchObj: {
        formConfig: {
          city: {
            name: '城市',
            type: 'input',
            placeholder: '请选择目的地'
          },
          dateTime: {
            name: '入住/离开时间',
            type: 'dateRange',
            placeholder: '请选择入住离开时间'
          },
          peopleNum: {
            name: '入住人数',
            type: 'input',
            placeholder: '请输入入住人数'
          }
        },
        formData: {
          city: '',
          dateTime: '',
          peopleNum: ''
        }
      },
      iconList: [
        require('../../assets/images/banner/icon1.png')
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  searchFn() {
    Taro.showToast({
			title: `功能开发中 暂不支持`,
			icon: 'none',
			duration: 2000
		})
  }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='home'>
        <View className='banner'>
          <Swiper
            circular={this.state.banner.circular}
            autoplay={this.state.banner.autoplay}
            interval={this.state.banner.interval}
            duration={this.state.banner.duration}
          >
            {
              this.state.banner.imgUrlList.map((item, index) => {
                return (
                  <SwiperItem key={index}>
                    <Image src={item} className='banner-img' mode='aspectFill' />
                  </SwiperItem>
                )
              })
            }
          </Swiper>
        </View>
        <View className='content'>
          <View className='searchbox'>
            <Form className='formbox' onSubmit={this.searchFn.bind(this)}>
              {
                Object.keys(this.state.searchObj.formConfig).map((key, index) => {
                  if (this.state.searchObj.formConfig[key].type === 'input') {
                    return (
                      <View className='form-item' key={index}>
                        <Text className='form-label'>{this.state.searchObj.formConfig[key].name}</Text>
                        <Input  
                          type='text'
                          placeholderClass='search-pla'
                          placeholder={this.state.searchObj.formConfig[key].placeholder}
                          value={this.state.searchObj.formData[key]}
                        />
                      </View>
                    )
                  } else if (this.state.searchObj.formConfig[key].type === 'dateRange') {
                    return (
                      <View className='form-item' key={index}>
                        <Text className='form-label'>{this.state.searchObj.formConfig[key].name}</Text>
                        <Input  
                          type='text'
                          placeholderClass='search-pla'
                          placeholder={this.state.searchObj.formConfig[key].placeholder}
                          value={this.state.searchObj.formData[key]}
                        />
                      </View>
                    )
                  }
                })
              }
              <Button className='searchbtn' formType='submit'>搜索</Button>
            </Form>
          </View>
          <View className='citybox'>
              <View className='citybox-header'>
                <View>
                  <Image className='header-img' src={this.state.iconList[0]} />推荐城市
                  <Text className='header-opt'>更多城市{'>'}</Text>
                </View>
              </View>
          </View>
        </View>
      </View>
    )
  }
}
