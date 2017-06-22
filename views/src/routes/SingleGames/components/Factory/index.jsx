import React, { Component, PropTypes } from 'react'
import cs from 'classnames'
import RuleModel from './components/rule-model'

import './styles'
import Game from './lib/Factory'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EventBusAction from 'actions/EventBusAction'

class Factory extends Component {
	constructor(props) {
		super(props)
		this.state = {
			gameProgress: 100,
			gameSign: false,
			helpShow: false,
			word: 'Game Start',
			game: null
		}
		this.switchState = this.switchState.bind(this)
		this.toggleHelp = this.toggleHelp.bind(this)
		this.toggleMenu = (bool) => this.props.actions.execute('menu', bool)
		this.clickFn = this.clickFn.bind(this)
	}
	componentWillUnmount() {
		this.toggleMenu(true)
	}
	switchState() {
		let obj = {
			gameSign: !this.state.gameSign
		}
		this.toggleMenu(this.state.gameSign)
		if (!this.state.game) {
			obj.game = new Game(this.refs.factory)
		}
		else {
			obj.word = 'Continue'
		}
		this.setState(obj)
	}
	toggleHelp() {
		this.refs.rule.toggle()
	}
	clickFn() {
		this.state.game.start()
	}
	render() {
		let GameClass = cs('game-main', {
			show: this.state.gameSign
		})
		let GroupClass = cs('game-prev-group', {
			hide: this.state.gameSign
		})
		return (
			<div ref="view" className="factory-view">
				<div className={GroupClass}>
					<section className="title-group">
						<h1 className="game-title">
							Factory
						</h1>
						<small className="version">beta</small>
					</section>
					<button className="game-btn" onClick={this.switchState}>{ this.state.word }</button>
					<button className="game-btn" onClick={this.toggleHelp}>Help</button>
				</div>
				<div className={GameClass}>
					<div className="game-btn-group">
						<button onClick={this.switchState}>
							<i className="iconfont icon-left"></i>
						</button>
						<button onClick={this.toggleHelp}>
							<i className="iconfont icon-help"></i>
						</button>
					</div>
					<div ref="factory" className="factory"></div>
				</div>
				<RuleModel ref="rule" show={this.state.helpShow} />
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {store: state}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(EventBusAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Factory)

Factory.propTypes = {
	actions: PropTypes.object
}