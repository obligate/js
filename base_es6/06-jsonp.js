const http = require('http')
const urlModule = require('url')


http.createServer(function(req,res){
    const { pathname:url, query} = urlModule.parse(req.url,true);
	if(url === "/getscript"){
		var data = {
			name:'xjj',
			age:18,
			gender:'女'
		};

		// 拼接一个合法的js脚本，这里拼接的是一个方法的调用
		// var scriptStr = 'show()'
		var scriptStr = `${query.callback}(${JSON.stringify(data)})`
		// res.end 发送给客户端，客户端去把这个字符串，当作JS代码去解析执行
		console.log(scriptStr);
		res.end(scriptStr);
	}else{
		res.end('404');
	}
}).listen(8000,function(){
    console.log('http://localhost:8000')
})