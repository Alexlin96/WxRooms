import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Form, Input, Text, Button  } from '@tarojs/components'
import './index.less'

export default class Home extends Component {
  constructor() {
    super(...arguments)
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
        require('../../assets/images/banner/icon1.png'),
        require('../../assets/images/banner/icon2.png')
      ],
      cityList: [
        {
          id: 110,
          cityImgUrl: require('../../assets//images/cityimg/hainan.jpg'),
          citySpell:'HAINAN',
          cityName:'海南'
        },
        {
          id: 111,
          cityImgUrl: require('../../assets//images/cityimg/guangzhou.jpg'),
          citySpell:'Guangzhou',
          cityName:'广州'
        },
        {
          id: 112,
          cityImgUrl: require('../../assets//images/cityimg/HK.jpg'),
          citySpell:'HK',
          cityName:'香港'
        },
      ],
      // eslint-disable-next-line react/no-unused-state
      roomList: [
        {
          id: 210,
          roomImgUrl: require('../../assets/images/cityimg/j1.jpg'),
          roomPrice: '8888',
          roomTitle: '酋长国宫殿酒店',
          roomAddress: '位于阿拉伯联合酋长国首都阿布扎比的西北的海岸边'
        },
        {
          id: 211,
          roomImgUrl: require('../../assets/images/cityimg/j2.jpg'),
          roomPrice: '6888',
          roomTitle: '重庆希尔顿大酒店',
          roomAddress: '位于长江和嘉陵江环抱之处，紧临中央商务区和城市中心'
        },
        {
          id: 212,
          roomImgUrl: require('../../assets/images/cityimg/j3.jpg'),
          roomPrice: '6666',
          roomTitle: '海南君华海逸大酒店',
          roomAddress: '位于文华路，地理位置优越，出行交通十分便利'
        }
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
            <View className='citybox-content'>
              <View className='citybox-par'>
                {
                  this.state.cityList.map(item => {
                    return (
                      <View className='citybox-item' key={item.id}>
                        <Image className='citybox-item-img' src={item.cityImgUrl} mode='aspectFill' />
                        <View className='citybox-item-title'>
                          <View>{item.citySpell}</View>
                          <View>{item.cityName}</View>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </View>
          <View className='roombox'>
            <View className='roombox-header'>
              <View>
                <Image className='header-img' src={this.state.iconList[1]} />推荐房源 
                <Text className='header-opt'>更多房源{'>'}</Text>
              </View>
            </View>
            <View className='roombox-content'>
              {
                this.state.roomList.map(item => {
                  return (
                    <View className='roombox-item' key={item.id}>
                      <View className='roombox-item-imgbox'>
                        <Image className='roombox-item-img' src={item.roomImgUrl} mode='aspectFill' />
                        <View className='roombox-item-parice'>
                          ￥ {item.roomPrice} / 晚
                        </View>
                      </View>
                      <View className='roombox-item-title'>{item.roomTitle}</View>
                      <View className='roombox-item-address'>{item.roomAddress}</View>
                    </View>
                  )
                })
              }
            </View>
          </View>
        </View>
      </View>
    )
  }
}
