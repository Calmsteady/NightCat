webpackJsonp([0,1],{113:function(t,e,i){t.exports={default:i(205),__esModule:!0}},114:function(t,e,i){t.exports={default:i(206),__esModule:!0}},180:function(t,e,i){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var r=i(111),s=i(112),n=o(s),a={register:(0,r.createAction)(n.RESGISTER_EVENT,function(t,e,i){return{type:t,fn:e,data:i}}),execute:(0,r.createAction)(n.EXECUTE)};e.default=a},190:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(44),s=o(r),n=i(18),a=o(n),c=i(19),u=o(c),l=i(46),f=o(l),p=i(45),h=o(p),d=i(4),x=o(d),m=i(116),y=o(m);i(402);var v=i(192),g=o(v),b=function(t){function e(t){(0,a.default)(this,e);var i=(0,f.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t));return i.state={gameProgress:100,gameSign:!1,word:"Game Start",game:null},i.switchState=i.switchState.bind(i),i.clickFn=i.clickFn.bind(i),i}return(0,h.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){}},{key:"switchState",value:function(){var t={gameSign:!this.state.gameSign};this.state.game?t.word="Continue":t.game=new g.default(this.refs.factory),this.setState(t)}},{key:"clickFn",value:function(){this.state.game.start()}},{key:"render",value:function(){var t=(0,y.default)("game-main",{show:this.state.gameSign}),e=(0,y.default)("game-prev-group",{hide:this.state.gameSign});return x.default.createElement("div",{ref:"view",className:"factory-view"},x.default.createElement("div",{className:e},x.default.createElement("section",{className:"title-group"},x.default.createElement("h1",{className:"game-title"},"Factory"),x.default.createElement("small",{className:"version"},"beta")),x.default.createElement("button",{className:"game-btn",onClick:this.switchState},this.state.word)),x.default.createElement("div",{className:t},x.default.createElement("div",{onClick:this.switchState},"Back"),x.default.createElement("div",{ref:"factory",className:"factory"})))}}]),e}(d.Component);e.default=b,b.propTypes={}},191:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(200),s=o(r),n=i(69),a=o(n),c=i(114),u=o(c),l=i(113),f=o(l),p=i(57),h=o(p),d=i(18),x=o(d),m=i(19),y=o(m),v={},g=function(){function t(e){(0,x.default)(this,t),(0,h.default)(this,v,e),this.init()}return(0,y.default)(t,[{key:"init",value:function(){this.items=[],this.active=null,this.last_output=0,this.success_count=0,this.output_active=null,this.createDetector(),this.initIems(),this.render()}},{key:"reset",value:function(){if(this.success_count=0,this.setActive(null,this.input_group),this.isMultigroup){this.last_output={};for(var t in this.output_group)this.last_output[t]=0,this.setActive(null,this.output_group[t].output_cgroup);(0,f.default)(this.items,function(t){t.output={};for(var e in t.output_el)t.output_el[e].textContent="",t.output_el[e].className="factory-item"})}else this.last_output=0,this.setActive(null,this.output_group),(0,f.default)(this.items,function(t){t.output_el.textContent="",t.output_el.className="factory-item"})}},{key:"createDetector",value:function(){if(this.elem=document.createElement("DIV"),this.elem.className="factory-detector",this.isMultigroup){this.output_group={},this.last_output={},this.input_group=this.createGroup("IN");for(var t in this.data[0].expectant_output){this.output_group[t]={},this.last_output[t]=0,this.output_group[t].el=this.createGroup("OUT."+t);var e=document.createElement("DIV");e.className="factory-group-child-wrap",this.output_group[t].expect_cgroup=this.createChildGroup(e,"factory-expect-group-wrap"),this.output_group[t].output_cgroup=this.createChildGroup(e,"factory-output-group-wrap"),this.output_group[t].exports=[],this.output_group[t].output=[],this.output_group[t].el.appendChild(e)}}else this.input_group=this.createGroup("IN"),this.output_group=this.createGroup("OUT"),this.expect_group=this.createGroup("EXP");this.wrap.appendChild(this.elem)}},{key:"createGroup",value:function(t){var e=document.createElement("DIV");return e.className="factory-group",e.innerHTML='<div class="group-title">'+t+"</div>",this.elem.appendChild(e),e}},{key:"createChildGroup",value:function(t,e){var i=document.createElement("DIV");return i.className="factory-group-child "+e,t.appendChild(i),i}},{key:"createOutputGroup",value:function(t){var e=document.createElement("DIV");return e.className="factory-group",e.innerHTML='<div class="group-title">'+t+"</div>",this.this.elem.appendChild(e),e}},{key:"createItem",value:function(t,e,i){var o=document.createElement("DIV");return o.className="factory-item",o.innerHTML=null!==t?(0,u.default)(t):"",o.setAttribute("data-index",e),i.appendChild(o),o}},{key:"initIems",value:function(){this.items=(0,f.default)(this.data,function(t,e){return(0,h.default)({index:e},t)})}},{key:"render",value:function(){var t=this;(0,f.default)(this.items,function(e,i){if(t.isMultigroup){t.createItem(e.input,i,t.input_group),e.output_el={},e.output={};for(var o in e.expectant_output){var r=e.expectant_output[o];e.output_el[o]=t.createItem(null,i,t.output_group[o].output_cgroup),t.createItem(r,i,t.output_group[o].expect_cgroup),t.output_group[o].exports.push(r)}}else t.createItem(e.input,i,t.input_group),e.output_el=t.createItem(e.output,i,t.output_group),t.createItem(e.expectant_output,i,t.expect_group)})}},{key:"setInputActive",value:function(t){this.setActive(t,this.input_group)}},{key:"setActive",value:function(t,e){var i=e.querySelector(".active");if(i&&i.classList.remove("active"),"number"==typeof t){var o=e.querySelector('[data-index="'+t+'"]');o&&o.classList.add("active")}}},{key:"output",value:function(t,e){var i=this.isMultigroup?this.last_output[e]:this.last_output;if(this.isMultigroup){var o=this.output_group[e];if(i<this.data.length){var r=o.exports[i],s=this.items[i].output_el[e],n={output:t,expectant_output:r,output_el:s};this.items[i].output[e]=o.output[i]=t,s.textContent=null!==t?(0,u.default)(t):"",this.examine(i,n),this.setActive(i++,o.output_cgroup),this.last_output[e]=i,i===this.data.length&&this.setActive(null,o.output_cgroup)}}else i<this.data.length&&(this.items[i].output=t,this.items[i].output_el.textContent=null!==t?(0,u.default)(t):"",this.examine(i),this.setActive(i++,this.output_group),this.last_output=i,i===this.data.length&&this.setActive(null,this.output_group))}},{key:"examine",value:function(t,e){var i=e||this.items[t];this.isDiff(i.output,i.expectant_output)?i.output_el.classList.add("error"):(this.isMultigroup?this.isDiff(this.items[t].output,this.items[t].expectant_output)||this.success_count++:this.success_count++,i.output_el.classList.add("success"))}},{key:"isDiff",value:function(t,e){if(Object.prototype.toString.call(t)!==Object.prototype.toString.call(e))return!0;if(Array.isArray(t))return t.length!==e.length||t.some(function(t,i){return t!==e[i]});if("object"===("undefined"==typeof t?"undefined":(0,a.default)(t))){if((0,s.default)(t).length!==(0,s.default)(e).length)return!0;for(var i in t)if(t[i]!==e[i])return!0;return!1}return t!==e}},{key:"cloneObj",value:function(t){var e={};for(var i in t)e[i]=t[i];return e}}]),t}();e.default=g},192:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(113),s=o(r),n=i(57),a=o(n),c=i(18),u=o(c),l=i(19),f=o(l),p=i(191),h=o(p),d=i(193),x=o(d),m=i(194),y=o(m);i(399);var v={size:null,inService:!1,missions:y.default,mission:1,data_count:20,cols:4,rows:3,processor_count:12},g=function(){function t(e,i){(0,u.default)(this,t),(0,a.default)(this,v,i),this.elem=e,this.data=[],this.events=[],this.detector=null,this.active=0,this.init()}return(0,f.default)(t,[{key:"init",value:function(){this.initSize(),this.getMissions(),this.initMission(),this.createContaner(),this.createConsole(),this.initProcessor(),this.createDetector(),this.createPanel()}},{key:"destory",value:function(){for(this.elem.innerHTML="",this.data=[],this.events=[],this.active=0,this.inService=!1,this.detector=null;this.events.length;)this.events.shift()()}},{key:"initSize",value:function(){this.size?(this.width=this.size[0],this.height=this.size[1],this.elem.style.cssText="\n\t\t\t\twidth: "+this.width+"px;\n\t\t\t\theight: "+this.height+"px;\n\t\t\t"):(this.width=this.elem.offsetWidth,this.height=this.elem.offsetHeight)}},{key:"createDetector",value:function(){this.detector=new h.default({wrap:this.console,isMultigroup:this.isMultigroup||!1,factory:this,data:this.data})}},{key:"createPanel",value:function(){this.panel=document.createElement("DIV"),this.panel.className="factory-panel",this.btnGroup=document.createElement("DIV"),this.btnGroup.className="factory-btn-group",this.msgGroup=document.createElement("DIV"),this.msgGroup.className="factory-msg-group",this.msgGroup.textContent="Code Mode",this.nextBtn=this.createBtn("Next",this.next,this.btnGroup),this.autoBtn=this.createBtn("Auto",this.auto,this.btnGroup),this.resetBtn=this.createBtn("Reset",this.reset,this.btnGroup),this.restartBtn=this.createBtn("Restart",this.restart,this.btnGroup),this.panel.appendChild(this.btnGroup),this.panel.appendChild(this.msgGroup),this.console.appendChild(this.panel)}},{key:"createBtn",value:function(t,e,i){var o=document.createElement("BUTTON");return o.className="factory-panel-btn",o.textContent=t,e=e.bind(this),o.addEventListener("click",e,!1),this.events.push(function(){return o.removeEventListener("click",e,!1)}),i.appendChild(o),o}},{key:"createContaner",value:function(){this.container=document.createElement("DIV"),this.container.className="factory-container",this.elem.appendChild(this.container)}},{key:"createConsole",value:function(){this.console=document.createElement("DIV"),this.console.className="factory-console",this.elem.appendChild(this.console)}},{key:"getMissions",value:function(){var t=this.missions[this.mission];"function"!=typeof t?alert("你已全部通关:>"):(0,a.default)(this,this.missions[this.mission]())}},{key:"initMission",value:function(){for(var t=0;t<this.data_count;t++){var e=this.missionCreater();this.data.push({input:e.input,output:null,expectant_output:e.output,result:"pending"})}}},{key:"initProcessor",value:function(){var t=this;this.processors=[];for(var e=0;e<this.processor_count;e++)this.processors.push(new x.default({width:100/this.cols-3+"%",height:100/this.rows-3+"%",status:this.err&&this.err.indexOf(e)>-1?"error":"idle",size:this.size,wrap:this.container,factory:this,index:e}));(0,s.default)(this.processors,function(e,i){var o=i-1;e.leftProcessor=i%t.cols?t.processors[o]||null:null;var r=i+1;e.rightProcessor=r%t.cols?t.processors[r]||null:null;var s=i-t.cols;e.topProcessor=t.processors[s]||null;var n=i+t.cols;e.bottomProcessor=t.processors[n]||null,t.entry[i]&&e.setPort(t.entry[i],"entry"),t.export[i]&&e.setPort(t.export[i],"export")})}},{key:"unableCodeInput",value:function(t){(0,s.default)(this.processors,function(e){t?e.code.setAttribute("disabled",!0):e.code.removeAttribute("disabled")})}},{key:"auto",value:function(){var t=this;return this.timer?this.pause():(this.autoBtn.textContent="pause",this.autoBtn.classList.add("active"),void(this.timer=setInterval(function(){t.next()},200)))}},{key:"pause",value:function(){this.autoBtn.textContent="Auto",this.autoBtn.classList.remove("active"),clearInterval(this.timer),this.timer=null}},{key:"end",value:function(){this.pause(),this.detector.success_count===this.data.length?(this.msgGroup.textContent="你通关了, 点GO进入下一关:)",this.nextMissionBtn=this.createBtn("Go",this.nextMission,this.btnGroup)):this.msgGroup.textContent="出错了"+(this.data.length-this.detector.success_count)+"个, 点击Reset再改改"}},{key:"nextMission",value:function(){this.mission=this.mission+1,this.restart()}},{key:"restart",value:function(){this.msgGroup.textContent="Code Mode",this.pause(),this.destory(),this.init()}},{key:"reset",value:function(){this.active=0,this.inService=!1,this.unableCodeInput(!1),this.detector.reset(),this.msgGroup.textContent="Code Mode",(0,s.default)(this.processors,function(t){t._NEXT=null,t.resetACC()})}},{key:"next",value:function(){this.active<this.data.length?(this.detector.setInputActive(this.active),this.entryGetNext(),this.inService||(this.inService=!0,this.msgGroup.textContent="Running Mode",this.unableCodeInput(!0)),this.active++):this.detector.setInputActive(),(0,s.default)(this.processors,function(t){t.resetACC()}),this.entryGetNext(),(0,s.default)(this.processors,function(t){t.next()}),!this.processors.some(function(t){return"run"===t.status})&&this.end()}},{key:"entryGetNext",value:function(){for(var t in this.entry)this.data[this.active]&&this.processors[t].setNext(this.data[this.active].input)}}]),t}();e.default=g},193:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var _stringify=__webpack_require__(114),_stringify2=_interopRequireDefault(_stringify),_assign=__webpack_require__(57),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(18),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(19),_createClass3=_interopRequireDefault(_createClass2),_default={width:"30%",height:"30%",_NEXT:null,_ACC:null,_context:{},cur_size:0,size:128,status:"idle"},Processor=function(){function Processor(t){(0,_classCallCheck3.default)(this,Processor),(0,_assign2.default)(this,_default,t),this.asyncSize=this.asyncSize.bind(this),this.closeError=this.closeError.bind(this),this.init()}return(0,_createClass3.default)(Processor,[{key:"bindEvent",value:function(){this.code.addEventListener("keyup",this.asyncSize),this.elem.addEventListener("click",this.closeError)}},{key:"unbindEvent",value:function(){this.code.removeEventListener("keyup",this.asyncSize),this.elem.removeEventListener("click",this.closeError)}},{key:"init",value:function(){this.createProcessor(),this.bindEvent()}},{key:"destory",value:function(){this.unbindEvent()}},{key:"createProcessor",value:function(){this.elem=document.createElement("DIV"),this.elem.className="factory-process",this.elem.style.cssText="\n\t\twidth: "+this.width+";\n\t\theight: "+this.height+";\n\t\t","error"===this.status&&this.setError(),this.code=this.createCode(),this.displayArea=this.createDisplayArea(),this.wrap.appendChild(this.elem)}},{key:"setError",value:function(){this.elem.classList.add("factory-error"),this.elem.setAttribute("data-error","ERROR")}},{key:"setCodeError",value:function(t){this.elem.classList.add("factory-code-error"),this.elem.setAttribute("data-error",t),this.factory.pause()}},{key:"closeError",value:function(){this.elem.classList.contains("factory-code-error")&&this.elem.classList.remove("factory-code-error")}},{key:"createCode",value:function(){var t=document.createElement("DIV");t.className="code-group",t.innerHTML='<div class="code-index">Processor '+(this.index+1)+"</div>";var e=document.createElement("TEXTAREA");return e.className="code",e.setAttribute("spellcheck",!1),t.appendChild(e),this.elem.appendChild(t),e}},{key:"createDisplayArea",value:function(){var t=document.createElement("DIV");return t.className="display-area",this.displayNext=this.createItem("NEXT",this._NEXT,t),this.displayACC=this.createItem("ACC",this._ACC,t),this.displayStatus=this.createItem("STATUS",this.status,t),this.displaySize=this.createItem("BYTE",this.cur_size+"/"+this.size,t),this.elem.appendChild(t),t}},{key:"createItem",value:function(t,e,i){var o=document.createElement("DIV");o.className="display-item",o.innerHTML='<div class="item-title">'+t+"</div>";var r=document.createElement("DIV");return r.className="item-value",r.textContent=e,o.appendChild(r),i.appendChild(o),r}},{key:"asyncSize",value:function(t){var e=t.target.value.match(/\S/g);this.cur_size=e?e.length:0,this.cur_size>this.size&&(this.cur_size=this.size,t.target.value=t.target.value.substr(0,this.size)),this.displaySize.innerHTML=this.cur_size+"/"+this.size}},{key:"transmitACC",value:function(t,e){return"entry"!==this[e].type&&void("export"===this[e].type?null!==t&&this.factory.detector.output(t,this[e].name):this[e].setNext(t))}},{key:"setStatus",value:function(t){this.status=t,this.displayStatus.innerHTML=this.status}},{key:"setNext",value:function(t){"error"!==this.status&&(this._NEXT=t,this.displayNext.innerHTML=null!==this._NEXT?(0,_stringify2.default)(this._NEXT):"")}},{key:"next",value:function(){return"error"!==this.status&&(this.isEnd(),void(null!==this._ACC&&this.executeCode()))}},{key:"resetACC",value:function(){this._ACC=this._NEXT,this.displayACC.textContent=null!==this._ACC?(0,_stringify2.default)(this._ACC):"",this.setNext(null)}},{key:"isEnd",value:function(){null===this._ACC&&null===this._NEXT?this.setStatus("idle"):this.setStatus("run")}},{key:"executeCode",value:function executeCode(){var _this=this,code=this.code.value,fn=function fn(_ref){var NEXT=_ref.NEXT,ACC=_ref.ACC,L=_ref.L,R=_ref.R,T=_ref.T,B=_ref.B,ERROR=_ref.ERROR;try{eval(code)}catch(t){console.error(t),ERROR(t)}};this._context={},fn.call(this._context,{NEXT:this._NEXT,ACC:this._ACC,L:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_this._ACC;return _this.leftProcessor&&_this.transmitACC(t,"leftProcessor")},R:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_this._ACC;return _this.rightProcessor&&_this.transmitACC(t,"rightProcessor")},T:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_this._ACC;return _this.topProcessor&&_this.transmitACC(t,"topProcessor")},B:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_this._ACC;return _this.bottomProcessor&&_this.transmitACC(t,"bottomProcessor")},ERROR:function(t){return _this.setCodeError(t)}})}},{key:"setPort",value:function(t,e){this[t.pos]={type:e,name:t.name},this.elem.setAttribute("data-port",("entry"===e?"INPUT":"OUTPUT")+" "+(t.name||"")+" ↓"),this.elem.classList.add(e)}}]),Processor}();exports.default=Processor},194:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={1:function(){var t=function(){var t=function(){return~~(10*Math.random())},e=t();return{input:e,output:2*e}};return{err:[4,5,6],cols:4,rows:3,processor_count:12,size:64,entry:{0:{pos:"topProcessor"}},export:{8:{pos:"bottomProcessor"}},missionCreater:t}},2:function(){var t=function(){var t=function(){return~~(10*Math.random())},e=[t(),t(),t()],i=e.slice().sort(function(t,e){return t-e});return{input:e,output:i}};return{err:[],size:64,entry:{0:{pos:"topProcessor"}},export:{8:{pos:"bottomProcessor"}},missionCreater:t}},3:function(){var t=function(){var t=function(){return~~(3*Math.random())-1},e=t(),i=e>0?{A:1,B:0,C:0}:0===e?{A:0,B:1,C:0}:{A:0,B:0,C:1};return{input:e,output:i}};return{err:[],size:32,cols:3,rows:3,processor_count:9,isMultigroup:!0,entry:{1:{pos:"topProcessor"}},export:{6:{name:"A",pos:"bottomProcessor"},7:{name:"B",pos:"bottomProcessor"},8:{name:"C",pos:"bottomProcessor"}},missionCreater:t}}}},195:function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(44),s=o(r),n=i(18),a=o(n),c=i(19),u=o(c),l=i(46),f=o(l),p=i(45),h=o(p),d=i(4),x=o(d);i(403);var m=i(105),y=i(56),v=i(180),g=o(v),b=function(t){function e(t){return(0,a.default)(this,e),(0,f.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t))}return(0,h.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return x.default.createElement("div",{ref:"view",className:"home-view"},x.default.createElement("section",{className:"info"},x.default.createElement("h1",null,"NightCat"),x.default.createElement("small",null,"- Welcome to NightCat game city -")))}}]),e}(d.Component),_=function(t){return{store:t}},k=function(t){return{actions:(0,y.bindActionCreators)(g.default,t)}};e.default=(0,m.connect)(_,k)(b),b.propTypes={actions:d.PropTypes.any}},200:function(t,e,i){t.exports={default:i(211),__esModule:!0}},205:function(t,e,i){i(128),i(237),t.exports=i(10).Array.from},206:function(t,e,i){var o=i(10),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},211:function(t,e,i){i(243),t.exports=i(10).Object.keys},218:function(t,e,i){var o=i(70),r=i(13)("toStringTag"),s="Arguments"==o(function(){return arguments}()),n=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,i,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=n(e=Object(t),r))?i:s?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},219:function(t,e,i){"use strict";var o=i(22),r=i(49);t.exports=function(t,e,i){e in t?o.f(t,e,r(0,i)):t[e]=i}},222:function(t,e,i){var o=i(48),r=i(13)("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||s[r]===t)}},224:function(t,e,i){var o=i(30);t.exports=function(t,e,i,r){try{return r?e(o(i)[0],i[1]):e(i)}catch(e){var s=t.return;throw void 0!==s&&o(s.call(t)),e}}},226:function(t,e,i){var o=i(13)("iterator"),r=!1;try{var s=[7][o]();s.return=function(){r=!0},Array.from(s,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var i=!1;try{var s=[7],n=s[o]();n.next=function(){return{done:i=!0}},s[o]=function(){return n},t(s)}catch(t){}return i}},236:function(t,e,i){var o=i(218),r=i(13)("iterator"),s=i(48);t.exports=i(10).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||s[o(t)]}},237:function(t,e,i){"use strict";var o=i(71),r=i(20),s=i(50),n=i(224),a=i(222),c=i(127),u=i(219),l=i(236);r(r.S+r.F*!i(226)(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,r,f,p=s(t),h="function"==typeof this?this:Array,d=arguments.length,x=d>1?arguments[1]:void 0,m=void 0!==x,y=0,v=l(p);if(m&&(x=o(x,d>2?arguments[2]:void 0,2)),void 0==v||h==Array&&a(v))for(e=c(p.length),i=new h(e);e>y;y++)u(i,y,m?x(p[y],y):p[y]);else for(f=v.call(p),i=new h;!(r=f.next()).done;y++)u(i,y,m?n(f,x,[r.value,y],!0):r.value);return i.length=y,i}})},243:function(t,e,i){var o=i(50),r=i(33);i(125)("keys",function(){return function(t){return r(o(t))}})},251:function(t,e,i){e=t.exports=i(34)(),e.push([t.id,".factory{-ms-flex:1;flex:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;padding:10px;margin:14px;border:1px solid #fffffb;background-color:#130c0e}.factory,.factory-container{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1}.factory-container{-ms-flex:1;flex:1;margin:10px;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:30px 20px}.factory-container .factory-process{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;border:1px solid #fffffb}.factory-container .factory-process.entry:before{content:attr(data-port);color:#3498db;position:absolute;left:10px;top:-25px}.factory-container .factory-process.export:after{content:attr(data-port);position:absolute;color:#ffd400;right:10px;bottom:-25px}.factory-container .factory-process .code-group{position:relative;height:100%;margin-right:80px;-webkit-box-flex:1;-ms-flex:1;flex:1}.factory-container .factory-process .code-index{position:absolute;width:100%;height:100%;opacity:.1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1}.factory-container .factory-process .code{position:absolute;height:100%;width:100%;resize:none;background-color:transparent;color:#fffffb;font-size:14px;border-right:1px solid #fffffb;padding:5px;font-family:Montserrat,Segoe UI,Microsoft Yahei,Helvetica,Arial;z-index:2}.factory-container .factory-process .display-area{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;top:0;right:0;width:80px;height:100%;z-index:2}.factory-container .factory-process .display-area .display-item{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:2px 2px 0;padding:3px 0;text-align:center;border:1px solid #fffffb}.factory-container .factory-process .display-area .display-item>div{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.factory-container .factory-process .display-area .item-title{border-bottom:1px solid #d3dce6}.factory-container .factory-process.factory-error:after{opacity:.9;font-size:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.factory-container .factory-process.factory-code-error:after,.factory-container .factory-process.factory-error:after{content:attr(data-error);position:absolute;top:0;left:0;width:100%;height:100%;padding:20px;background-color:#d71345;z-index:5}.factory-container .factory-process.factory-code-error:after{opacity:.85;font-size:18px}.factory-console{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.factory-console,.factory-detector{display:-webkit-box;display:-ms-flexbox;display:flex}.factory-detector{-webkit-box-flex:1;-ms-flex:1;flex:1;width:380px;margin-top:40px}.factory-detector .factory-group{min-width:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border:1px solid #fffffb;margin:0 10px;color:#fffffb;text-align:center}.factory-detector .factory-group .factory-group-child-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}.factory-detector .factory-group .factory-group-child{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:40px;border:1px solid #fffffb;margin:1px}.factory-detector .factory-group .factory-expect-group-wrap{color:#999}.factory-detector .factory-group .factory-output-group-wrap{color:#fffffb}.factory-detector .factory-group .factory-item{height:25px;line-height:25px;padding:2px 5px;font-size:14px}.factory-detector .factory-group .factory-item>div{-webkit-box-flex:1;-ms-flex:1;flex:1;white-space:nowrap;letter-spacing:-.8px}.factory-detector .factory-group .factory-item>div span:last-child{opacity:.6}.factory-detector .factory-group .error{color:#d71345}.factory-detector .factory-group .success{color:#2ecc71}.factory-detector .factory-group .active{background-color:#fffffb;color:#130c0e}.factory-detector .factory-group .group-title{font-size:12px;padding:5px 10px;text-align:center;white-space:nowrap;border:1px solid #fffffb;margin:1px;color:#fffffb}.factory-panel{height:100px;margin:10px 0 0;padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.factory-panel .factory-panel-btn{border:none;font-size:16px;color:#fffffb;background-color:transparent;border:1px solid #fffffb;padding:8px 0;-webkit-box-flex:1;-ms-flex:1;flex:1;cursor:pointer}.factory-panel .factory-panel-btn:not(:last-child){margin-right:8px}.factory-panel .factory-panel-btn.active,.factory-panel .factory-panel-btn:hover{background-color:#fffffb;color:#130c0e}.factory-panel .factory-btn-group{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.factory-panel .factory-btn-group,.factory-panel .factory-msg-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.factory-panel .factory-msg-group{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-top:10px;background-color:#fffffb;color:#130c0e;padding:0 10px}",""])},254:function(t,e,i){e=t.exports=i(34)(),e.push([t.id,".factory-view{-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:#130c0e;color:#fffffb;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;flex-direction:column}.factory-view,.factory-view .game-prev-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column}.factory-view .game-prev-group{position:fixed;top:0;left:0;width:100%;height:100%;flex-direction:column}.factory-view .game-prev-group.hide{display:none}.factory-view .title-group{margin-top:150px;position:relative}.factory-view .title-group .game-title{font-size:60px;position:relative;-webkit-animation:restlessly 2s infinite;animation:restlessly 2s infinite}.factory-view .title-group .version{font-size:12px;position:absolute;bottom:14px;left:100%;opacity:.5}.factory-view .game-btn{margin-top:100px;border:none;font-size:30px;background-color:transparent;color:#fffffb;cursor:pointer;-webkit-animation:breathe 5s infinite;animation:breathe 5s infinite}.factory-view .game-btn:hover{text-shadow:0 0 5px hsla(0,0%,100%,.6)}.factory-view+.menu .menu-btn-outside{color:#fffffb}.factory-view .game-main{visibility:hidden}.factory-view .game-main.show{visibility:visible}@-webkit-keyframes restlessly{0%{text-shadow:3px 2px 0 #d71345}20%{text-shadow:2px -2px 0 #9b59b6}40%{text-shadow:-4px 2px 0 #d3dce6}60%{text-shadow:-3px -2px 0 #27ae60}80%{text-shadow:4px 3px 0 #b22c46}to{text-shadow:3px 2px 0 #d71345}}@keyframes restlessly{0%{text-shadow:3px 2px 0 #d71345}20%{text-shadow:2px -2px 0 #9b59b6}40%{text-shadow:-4px 2px 0 #d3dce6}60%{text-shadow:-3px -2px 0 #27ae60}80%{text-shadow:4px 3px 0 #b22c46}to{text-shadow:3px 2px 0 #d71345}}@-webkit-keyframes breathe{0%{text-shadow:0 0 0 #fff}20%{text-shadow:0 0 5px #fff}40%{text-shadow:0 0 7px #fff}50%{text-shadow:0 0 10px #fff}60%{text-shadow:0 0 7px #fff}80%{text-shadow:0 0 5px #fff}to{text-shadow:0 0 0 #fff}}@keyframes breathe{0%{text-shadow:0 0 0 #fff}20%{text-shadow:0 0 5px #fff}40%{text-shadow:0 0 7px #fff}50%{text-shadow:0 0 10px #fff}60%{text-shadow:0 0 7px #fff}80%{text-shadow:0 0 5px #fff}to{text-shadow:0 0 0 #fff}}",""])},255:function(t,e,i){e=t.exports=i(34)(),e.push([t.id,".home-view{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;background-image:url("+i(408)+");background-repeat:no-repeat;background-size:cover;cursor:default}.home-view .info{position:relative;font-size:20px;margin:120px 0 0 60px;width:300px;text-align:center}.home-view+.menu .menu-btn-outside,.home-view .info{color:#fffffb;text-shadow:0 0 10px hsla(0,0%,100%,.86)}",""])},399:function(t,e,i){var o=i(251);"string"==typeof o&&(o=[[t.id,o,""]]);i(43)(o,{});o.locals&&(t.exports=o.locals)},402:function(t,e,i){var o=i(254);"string"==typeof o&&(o=[[t.id,o,""]]);i(43)(o,{});o.locals&&(t.exports=o.locals)},403:function(t,e,i){var o=i(255);"string"==typeof o&&(o=[[t.id,o,""]]);i(43)(o,{});o.locals&&(t.exports=o.locals)},408:function(t,e,i){t.exports=i.p+"static/img/bg.c198192.jpg"},411:function(t,e,i){function o(t){return i(r(t))}function r(t){return s[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var s={"./factory/index.jsx":190,"./home/index.jsx":195};o.keys=function(){return Object.keys(s)},o.resolve=r,t.exports=o,o.id=411}});