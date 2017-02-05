import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
// import cs from 'classnames'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventBusAction from 'actions/EventBusAction'
import AuthAction from 'actions/AuthAction'

import './styles'

class Sign extends Component {
	constructor (props) {
		super(props)
		this.state = {
			userInfo: {}
		}
		this.notice = (msg, interval, status) => this.props.actions.execute('notice', msg, interval, { status: status, styles: { top: 'auto', bottom: '30px' } })
	}
	componentDidMount() {
		this.props.authConf.subscribeEvents('User', this.loadSelfData.bind(this))
		this.getUserInfo()
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.params.account !== this.state.userInfo.account) {
			this.getUserInfo()
		}
	}
	componentWillUnmount() {
		this.props.authConf.unsubscribeEvents('User')
	}
	/*  设置顶部用户信息  */
	getUserInfo() {
		let account = this.context.router.params.account
		if (account) {
			this.loadData(account)
		}
		else {
			this.loadSelfData()
		}
	}
	/*  查看用户的信息  */
	loadData(account) {
		axios.get('/getUserInfoByAccount', {
			params: {
				account: account
			}
		})
		.then((res) => {
			this.setState({
				userInfo: res.data
			})
		})
		.catch((err) => {
			this.notice(err.message, 2000, 'error')
		})
	}
	/*  查看自己的信息  */
	loadSelfData() {
		let { isLogin, userInfo } = this.props.auth
		if (isLogin && userInfo) {
			this.setState({
				userInfo: {
					account: userInfo.account,
					email: userInfo.email,
					avatar: userInfo.avatar
				}
			})
		}
		else {
			this.context.router.replace('/')
		}
	}
	render() {
		return (
			<div className="user-view">
				<div className="user-header">
					<img className="user-avatar" src={this.state.userInfo.avatar} />
					<h1 className="user-account">{this.state.userInfo.account}</h1>
					<small className="user-email">{this.state.userInfo.email}</small>
				</div>
				<ul className="user-router">
					<li>
						<IndexLink to={`/user${this.context.router.params.account ? ('/' + this.context.router.params.account) : ''}`} activeClassName="active">Information</IndexLink>
					</li>
					<li>
						<Link to={`/user/game-data${this.context.router.params.account ? ('/' + this.context.router.params.account) : ''}`} activeClassName="active">Game Data</Link>
					</li>
				</ul>
				{ this.props.children }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { auth: state.auth }
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(EventBusAction, dispatch),
	authConf: bindActionCreators(AuthAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Sign)

Sign.propTypes = {
	auth: PropTypes.object,
	children: PropTypes.object,
	authConf: PropTypes.object,
	actions: PropTypes.object,
	history: PropTypes.object,
	location: PropTypes.object
}

Sign.contextTypes = {
	router: React.PropTypes.any.isRequired
}