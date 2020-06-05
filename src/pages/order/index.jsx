import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtMessage } from 'taro-ui'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/order'
import houseImg from '../../assets/images/order/Lighthouse.jpg'
import './index.less'

@connect(state => state.order, actions)
export default class Order extends Component {
	constructor() {
		super(...arguments)
		this.state = {
			orderTypeList: [{ title: '全部' }, { title: '预订' }, { title: '待入住' }, { title: '已入住' }, { title: '已离店' }, { title: '已取消' }],
			// orderTypeVal: 0,
			order:[
				{
					orderId: '935858107',
					orderStatus:1,
					roomTitle:'海口美兰区 海甸岛欧式梦幻三室一厅复试小洋房',
					indateStr:'2018-09-15',
					outdateStr:'2018-09-22',
					payMoney:'6888.00',
					opt: 'pay',
					imgUrl: houseImg
				},
				{
					orderId: '852445763',
					orderStatus: 2,
					roomTitle: '海口琼山区 国兴大道非洲茅草房一室一厅带独卫',
					indateStr: '2018-09-19',
					outdateStr: '2018-09-22',
					payMoney: '188.00',
					opt: 'cancel',
					imgUrl: houseImg
				},
				{
					orderId: '101894088',
					orderStatus: 3,
					roomTitle: '海口秀英区 白水塘皇家梦幻童话式别墅一套',
					indateStr: '2018-09-30',
					outdateStr: '2018-10-07',
					payMoney: '18888.00',
					opt: 'comment',
					imgUrl: houseImg
				},
				{
					orderId: '935858107',
					orderStatus: 4,
					roomTitle: '海口美兰区 桂林洋农场平顶房一套200平方',
					indateStr: '2018-10-15',
					outdateStr: '2018-10-22',
					payMoney: '888.00',
					opt: 'successed',
					imgUrl: houseImg
				},
				{
					orderId: '935858107',
					orderStatus: 5,
					roomTitle: '海口市琼山区 府城中学学区房800平方带游泳池',
					indateStr: '2018-10-15',
					outdateStr: '2018-11-22',
					payMoney: '18888.00',
					opt: 'cancelled',
					imgUrl: houseImg
				}   
			],
		}
	}

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

	componentDidHide () { }
	
	// tab点击
	handleClick(v) {
		// this.setState({
		// 	orderTypeVal: v
		// })
		this.props.dispatchOrderType(v)
	}

	// 操作按钮
	optFn(obj) {
		switch (obj.opt) {
			case 'pay':
				this.toPayFn(obj)
				break;
			case 'cancel':
				this.toCancelFn(obj)
				break;
			case 'comment':
				this.toCommentFn(obj)
				break;
			default:
				break;
		}
	}
	// 支付
	toPayFn(obj) {
		const { orderId } = obj
		Taro.showToast({
			title: `该订单编号:${orderId}支付失败(功能开发中 暂不支持)`,
			icon: 'none',
			duration: 2000
		})
	}
	// 取消
	toCancelFn(obj) {
		const { orderId } = obj
		const that = this
		Taro.showModal({
			title: `提示(订单号${orderId})`,
			content: '确定取消此订单？',
			success: function (res) {
				if (res.confirm) {
					const { order } = that.state
					order.forEach(el => {
						if (el.orderId === orderId) {
							el.opt = 'cancelled'
							el.orderStatus = 5
						}
					})
					that.setState({
						order
					}, () => {
						Taro.atMessage({
							'message': '成功取消订单',
							'type': 'success'
						})
					})
				}
			}
		})
	}
	// 评论
	toCommentFn(obj) {
		const { orderId } = obj
		Taro.showToast({
			title: `该订单编号:${orderId}评论失败(功能开发中 暂不支持)`,
			icon: 'none',
			duration: 2000
		})
	}

  config = {
    navigationBarTitleText: '订单'
	}


  render () {
		const orderStatusList = ['待支付', '待入住', '已入住', '已结束', '已取消']
		const optMap = {
			pay: '立即支付',
			cancel: '取消',
			comment: '去评价',
			successed: '交易完成',
			cancelled: '交易取消'
		}
    return (
      <View className='order'>
				<AtMessage />
				<AtTabs current={this.props.orderTypeVal} tabList={this.state.orderTypeList} onClick={this.handleClick.bind(this)} scroll>
					{
						this.state.orderTypeList.map((item, index) => {
							return (
								<AtTabsPane current={this.props.orderTypeVal} index={index} key={index}>
									{
										this.state.order.map((orderItem) => {
											if (index === 0 || orderItem.orderStatus === index) {
												return (
													<View className='tab-item'>
														<View className='order-top'>
															订单编号：{orderItem.orderId}
															<Text>{orderStatusList[orderItem.orderStatus-1]}</Text>
														</View>
														<View className='order-content'>
															<Image src={orderItem.imgUrl} className='content-img' mode='aspectFill' />
															<Block>
																<View className='content-title'>{ orderItem.roomTitle }</View>
																<View className='content-mes'>
																	<Text>入住：{orderItem.indateStr}</Text>
																</View>
																<View className='content-mes'>
																	<Text>退房：{orderItem.outdateStr} 12:00前</Text>
																</View>
															</Block>
														</View>
														<View className='order-bottom at-row'>
															<View className='at-col at-col-6 bottom-money'>
																订单总额：
																<Text>{orderItem.payMoney}</Text>
															</View>
															<View className='at-col at-col-6 bottom-opt'>
																{
																	(!['successed', 'cancelled'].includes(orderItem.opt)) && <Text data-index={orderItem.opt} onClick={this.optFn.bind(this, orderItem)}>{optMap[orderItem.opt]}</Text>
																}
															</View>
														</View>
													</View>
												)
											}
										})
									}			
								</AtTabsPane>
							)
						})
					}
				</AtTabs>
      </View>
    )
  }
}
