import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Order extends Component {
	constructor() {
		super()
		this.state = {
			orderTypeList: ['全部', '预订', '待入住', '已入住', '已离店', '已取消'],
			orderTypeVal: 0,
			order:[
				{
					orderData: {
						orderNum: '935858107',
						orderStatus:1,
						roomTitle:'海口美兰区 海甸岛欧式梦幻三室一厅复试小洋房',
						indateStr:'2018-09-15',
						outdateStr:'2018-09-22',
						payMoney:'6888.00',
						ctrl:'0',
					},
				},
				{
					orderData: {
						orderNum: '852445763',
						orderStatus: 2,
						roomTitle: '海口琼山区 国兴大道非洲茅草房一室一厅带独卫',
						indateStr: '2018-09-19',
						outdateStr: '2018-09-22',
						payMoney: '188.00',
						ctrl: '1',
					},
				},
				{
					orderData: {
						orderNum: '101894088',
						orderStatus: 3,
						roomTitle: '海口秀英区 白水塘皇家梦幻童话式别墅一套',
						indateStr: '2018-09-30',
						outdateStr: '2018-10-07',
						payMoney: '18888.00',
						ctrl: '2',
					},
				},
				{
					orderData: {
						orderNum: '935858107',
						orderStatus: 4,
						roomTitle: '海口美兰区 桂林洋农场平顶房一套200平方',
						indateStr: '2018-10-15',
						outdateStr: '2018-10-22',
						payMoney: '888.00',
						ctrl: '4',
					},
				},
				{
					orderData: {
						orderNum: '935858107',
						orderStatus: 5,
						roomTitle: '海口市琼山区 府城中学学区房800平方带游泳池',
						indateStr: '2018-10-15',
						outdateStr: '2018-11-22',
						payMoney: '18888.00',
						ctrl: '4',
					},
				},      
			],
		}
	}

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Text>order!</Text>
      </View>
    )
  }
}
