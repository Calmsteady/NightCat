let obj

if (process.env.NODE_ENV === 'development') {
	obj = {
		/*  react-devtools 配置  */
		devtools: false,
		devtoolsPosition: 'left',
		/*  是否开启redux-logger  */
		logger: false,

		/*  http 配置 */
		withCredentials: true,
		host: 'http://localhost:3000',

		/*  socket.io  */
		socket_host: 'http://localhost:3000'
	}
}
else {
	obj = {
		host: '',
		withCredentials: false,
		socket_host: 'https://nightcat.win'
	}
}

export default obj