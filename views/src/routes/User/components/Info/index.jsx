import React, { Component, PropTypes } from 'react'
import Immutable from 'seamless-immutable'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventBusAction from 'actions/EventBusAction'
import AuthAction from 'actions/AuthAction'

import './styles'

class Info extends Component {
	constructor (props) {
		super(props)
		this.state = {
			isChange: false,
			account: undefined,
			info: this.props.userInfo
		}
		this.update = this.update.bind(this)
		this.uploadImg = this.uploadImg.bind(this)
		this.notice = (msg, interval, status) => this.props.actions.execute('notice', msg, interval, { status: status, styles: { top: 'auto', bottom: '30px' } })
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.userInfo !== this.state.info) {
			this.setState({
				info: nextProps.userInfo
			})
		}
	}
	/*  保存用户信息  */
	update() {
		this.notice('Uploading data...', 0, 'loading')

		axios.post('/saveUserInfo', {
			info: this.state.info
		})
		.then((res) => {
			this.notice(res.message, 2000, 'success')
			this.props.authConf.setUserInfo(this.state.info)
		})
		.catch((err) => {
			this.notice(err.message, 2000, 'error')
		})
	}
	/*  上传图片  */
	uploadImg(e) {
		let file = e.target.files[0]
		if (!file) {
			return false
		}
		var reader = new FileReader()
		reader.onload = (e) => {
			this.compress(e.target.result).then((avatar) => {
				this.setState({
					info: Immutable.merge(this.state.info, { avatar: avatar })
				})
			})
		}
		reader.readAsDataURL(file)
	}
	/*  压缩图片  */
	compress(src) {
		return new Promise((res, rej) => {
			/*  压缩配置  */
			let opt = {
				width: 320,
				height: 320,
				quality: 0.92
			}

			let img = new Image()
			let canvas = document.createElement('CANVAS')
			canvas.width = opt.width
			canvas.height = opt.height
			let cxt = canvas.getContext('2d')

			img.onload = () => {
				let size = [img.width, img.height]
				/*  将长的方向进行裁剪  */
				let x, y, base
				if (size[0] > size[1]) {
					y = 0
					x = (size[0] - size[1]) / 2
					base = size[1]
				}
				else {
					x = 0
					y = (size[1] - size[0]) / 2
					base = size[0]
				}
				cxt.drawImage(img, x, y, base, base, 0, 0, opt.width, opt.height)
				res(canvas.toDataURL('image/jpeg', opt.quality))
			}

			img.src = src
		})
	}
	/*  input 输入同步  */
	handleChange(e, name) {
		let val = e.target.value
		this.setState({
			isChange: true,
			info:  Immutable.merge(this.state.info, { [name]: val })
		})
	}
	/*  生成input的props  */
	createProps(name, type) {
		return {
			spellCheck: false,
			autoComplete: false,
			id: name,
			ref: name,
			type: type,
			readOnly: !this.props.isSelf,
			disabled: !this.props.isSelf,
			value: this.state.info[name] || '',
			onChange: (e) => this.handleChange(e, name)
		}
	}
	render() {
		return (
			<div ref="view" className="info-view">
				<div className="form-group">
					{
						this.props.isSelf && (
							<div className="form-item">
								<label htmlFor="name">Avatar</label>
								<div className="user-avatar">
									<img src={this.state.info.avatar} />
									<input type="file" className="updateHeadImg" onChange={this.uploadImg} />
								</div>
								<small> Click the picture to upload avatar </small>
							</div>
						)
					}
					<div className="form-item">
						<label htmlFor="name">Name</label>
						<input {...this.createProps('name', 'text')} />
					</div>
					<div className="form-item">
						<label htmlFor="profile">Profile</label>
						<input {...this.createProps('profile', 'text')} />
					</div>
					<div className="form-item">
						<label htmlFor="website">Website</label>
						<input {...this.createProps('website', 'text')} />
					</div>
					<div className="form-item">
						<label htmlFor="github">Github</label>
						<input {...this.createProps('github', 'text')} />
					</div>
					<div className="form-item">
						<label htmlFor="location">Location</label>
						<input {...this.createProps('location', 'text')} />
					</div>
					{
						this.props.isSelf && (
							<button className="update-btn" onClick={this.update}>Update Info</button>
						)
					}
				</div>
				<div className="modal"></div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(EventBusAction, dispatch),
	authConf: bindActionCreators(AuthAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Info)

Info.propTypes = {
	isLogin: PropTypes.bool,
	isSelf: PropTypes.bool,
	userInfo: PropTypes.object,
	authConf: PropTypes.object,
	actions: PropTypes.object,
	history: PropTypes.object,
	location: PropTypes.object
}

Info.contextTypes = {
	router: React.PropTypes.any.isRequired
}