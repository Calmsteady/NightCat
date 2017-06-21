const _default = {
	width: '30%',
	height: '30%',
	_NEXT: null, // 上个过程将覆盖ACC的值
	_ACC: null, // 处理空间
	_COM: null, // 存储空间
	_context: {}, // 代码执行上下文
	cur_size: 0, // 当前大小
	size: 128, // 限制大小
	default: undefined, //初始化时默认文本
	status: 'idle', // ['unavail', 'idle', 'error']
}

/*  Factory处理器对象  */
export default class Processor {
	constructor(options) {
		Object.assign(this, _default, options)
		this.asyncSize = this.asyncSize.bind(this)
		this.closeError = this.closeError.bind(this)
		this.init()
	}
	/*  绑定事件  */
	bindEvent() {
		this.code.addEventListener('keyup', this.asyncSize)
		this.elem.addEventListener('click', this.closeError)
	}
	/*  注销事件  */
	unbindEvent() {
		this.code.removeEventListener('keyup', this.asyncSize)
		this.elem.removeEventListener('click', this.closeError)
	}
	/*  初始化  */
	init() {
		this.ports = []
		this.createProcessor()
		this.bindEvent()
	}
	/*  销毁对象  */
	destroy() {
		this.wrap.removeChild(this.processWrap)
		this.unbindEvent()
	}
	/*  创建一个处理器  */
	createProcessor() {
		this.processWrap = document.createElement('DIV')
		this.processWrap.className = 'factory-process-wrap'
		this.processWrap.style.cssText = `
		width: ${this.width};
		height: ${this.height};
		padding: 14px;
		`

		this.elem = document.createElement('DIV')
		this.elem.className = 'factory-process'
		this.status === 'error' && this.setError()
		this.code = this.createCode()
		this.displayArea = this.createDisplayArea()
		this.processWrap.appendChild(this.elem)
		this.wrap.appendChild(this.processWrap)
	}
	/*  错误模式  */
	setError() {
		this.elem.classList.add('factory-error')
		this.elem.setAttribute('data-error', 'ERROR')
	}
	/*  代码出错  */
	setCodeError(err) {
		this.elem.classList.add('factory-code-error')
		this.elem.setAttribute('data-error', err)
		this.factory.pause()
	}
	/*  代码出错遮罩层关闭  */
	closeError() {
		if (this.elem.classList.contains('factory-code-error')) {
			this.elem.classList.remove('factory-code-error')
		}
	}
	/*  创建代码窗口textarea  */
	createCode() {
		let elem = document.createElement('DIV')
		elem.className = 'code-group'
		elem.innerHTML = `<div class="code-index">Processor ${this.index + 1}</div>`

		let textarea = document.createElement('TEXTAREA')
		textarea.className = 'code'
		if (this.default) {
			textarea.value = this.default || ''
			this.asyncSize(this.default, textarea)
		}
		textarea.setAttribute('spellcheck', false)
		elem.appendChild(textarea)
		this.elem.appendChild(elem)
		return textarea
	}
	/*  创建展示台  */
	createDisplayArea() {
		let elem = document.createElement('DIV')
		elem.className = 'display-area'
		this.displayNEXT = this.createItem('NEXT', this._NEXT, elem)
		this.displayACC = this.createItem('ACC', this._ACC, elem)
		this.displayCOM = this.createItem('COM', this._COM, elem)
		this.displayStatus = this.createItem('STATUS', this.status, elem)
		this.displaySize = this.createItem('BYTE', `${this.cur_size}/${this.size}`, elem)
		this.elem.appendChild(elem)
		return elem
	}
	/*  创建展示台的项目  */
	createItem(name, value, wrap) {
		let elem = document.createElement('DIV')
		elem.className = 'display-item'
		elem.innerHTML = `<div class="item-title">${name}</div>`

		let value_elem = document.createElement('DIV')
		value_elem.className = 'item-value'
		value_elem.textContent = value
		elem.appendChild(value_elem)
		wrap.appendChild(elem)
		return value_elem
	}
	/*  同步用户输入长度  */
	asyncSize(e, el) {
		let value = typeof e === 'string' ? e : e.target.value
		let formatted_val = value.match(/\S/g)
		this.cur_size = formatted_val ? this.getByteLen(formatted_val) : 0
		if (this.cur_size > this.size) {
			this.cur_size = this.size
			let str = '', n = 0
			for (let ch of value) {
				str += ch
				if (/\S/.test(ch)) {
					n += ch.match(/[\u4E00-\u9FA5]/g) != null ? 2 : 1
				}
				if (n >= this.size)
					break
			}
			el = el || this.code
			el.value = str
		}
		if (typeof e === 'object')
			this.displaySize.innerHTML = `${this.cur_size}/${this.size}`
	}
	/*  得到代码长度  */
	getByteLen(str) {
		var len = 0;
		for (let ch of str) {
			if (ch.match(/[\u4E00-\u9FA5]/g) != null) {
				len += 2
			}
			else {
				len += 1
			}
		}
		return len
	}
	/*  处理器传递前判断  */
	transmitACC(val, key) {
		if (this[key].type === 'entry') {
			return false
		}
		else if (this[key].type === 'export') {
			val !== null && this.factory.detector.output(val, this[key].name)
		}
		else {
			this[key].setNext(val)
		}
	}
	setCom(val) {
		this._COM = val
		this.displayCOM.innerHTML = this._COM !== null ? JSON.stringify(this._COM) : ''
	}
	/*  设置Status  */
	setStatus(val) {
		this.status = val
		this.displayStatus.innerHTML = this.status
	}
	/*  设置Next值  */
	setNext(val) {
		if (this.status === 'error')
			return

		this._NEXT = val
		this.displayNEXT.innerHTML = this._NEXT !== null ? JSON.stringify(this._NEXT) : ''
	}
	/*  运行  */
	next() {
		if (this.status === 'error')
			return false

		this.isEnd()
		this._ACC !== null && this.executeCode() // 执行用户的代码
	}
	/*  将NEXT传递给ACC  */
	resetACC() {
		this._ACC = this._NEXT
		this.displayACC.textContent = this._ACC !== null ? JSON.stringify(this._ACC) : ''
		this.setNext(null)
	}
	/*  判断是否全部执行完毕 (全部NEXT和ACC为零)  */
	isEnd() {
		if (this._ACC === null && this._NEXT === null) {
			this.setStatus('idle')
		}
		else {
			this.setStatus('run')
		}
	}
	/*  执行用户的代码  */
	executeCode() {
		let code = this.code.value
		const fn = function({ NEXT, ACC, COM, L, R, T, B, C, __ERROR__ }) {
			if(process.env.NODE_ENV === 'production'){
				try {
					eval(code)
				}
				catch (err) {
					console.error(err)
					__ERROR__(err)
				}
			}
			else {
				eval(code)
			}
		}
		this._context = {}
		fn.call(this._context, {
			NEXT: this._NEXT,
			ACC: this._ACC,
			COM: this._COM,
			L: (val = this._ACC) => this.leftProcessor && this.transmitACC(val, 'leftProcessor'),
			R: (val = this._ACC) => this.rightProcessor && this.transmitACC(val, 'rightProcessor'),
			T: (val = this._ACC) => this.topProcessor && this.transmitACC(val, 'topProcessor'),
			B: (val = this._ACC) => this.bottomProcessor && this.transmitACC(val, 'bottomProcessor'),
			C: (val = null) => this.setCom(val),
			__ERROR__: (err) => this.setCodeError(err)
		})
	}
	/*  设置进出口  */
	setPort(obj, type) {
		this[`${obj.pos}Processor`] = {
			type: type,
			name: obj.name
		}
		this.ports.push(this.createPortElem(obj, type))
	}
	/*  生产端口元素  */
	createPortElem(obj, type) {
		let elem = document.createElement('DIV')
		elem.className = `factory-port ${type} factory-pos-${obj.pos}`
		elem.innerHTML = `${type === 'entry' ? 'IN' : 'OUT'} ${obj.name || ''} <i class="iconfont icon-${type === 'entry' ? this.reversePos(obj.pos) : obj.pos}-arrow"></i>`
		this.elem.appendChild(elem)
		return elem
	}
	/*  获得相反方向  */
	reversePos(pos) {
		const direction = {
			left: 'right',
			right: 'left',
			top: 'bottom',
			bottom: 'top'
		}
		return direction[pos]
	}
}