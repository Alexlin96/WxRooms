import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import tipPng from '@/images/mine-nav/set.png'
import './index.less'

export default class Index extends Component {
	constructor() {
		super()
		this.state =  {
			messdatalist: [
				{
					imgurl: tipPng,
					title:"港式奶茶",
					mes:"香港的奶茶又称为丝袜奶茶...",
					time:"20:15"
				},
				{
					imgurl: tipPng,
					title: "草莓奶茶",
					mes: "草莓奶茶是以红茶，草莓，制作而成的...",
					time: "20:15"
				},
				{
					imgurl: tipPng,
					title: "黑砖奶茶",
					mes: "一黑到底，也能活出五光十色...",
					time: "20:15"
				},
				{
					imgurl: tipPng,
					title: "黑砖奶茶",
					mes: "是以奥利奥碎为辅料的奶茶。...",
					time: "20:15"
				},
			]
		}
	}

  componentWillMount () { 
	}

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

	componentDidHide () { }
	
	goMesDetail(item) {
		Taro.navigateTo({
			url: `/pages/message/mesroom/index?title=${item.title}&mes=${item.mes}`
		})
	}

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='message'>
        {
					this.state.messdatalist.map((item, index) => {
						return (
							<View key={index} className='mess' onClick={this.goMesDetail.bind(this, item)}>
								<Image className='mess-img' src={item.imgurl}></Image>
								<View className='mess-content'>
									<Text className='mess-h' >{item.title}</Text>
									<Text className='mess-p'>
										<Text className='mesages'>{item.mes}</Text>
									</Text>
								</View>
								<View className='mess-time'>{item.time}</View>
							</View>	
							)
						}
					)
				}
      </View>
    )
  }
}
