const http = require('http')

http.createServer(function(request,response){
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.write('<h1>Hello world 你好</h1>')
    response.end()
}).listen(8000,function(){
    console.log('http://localhost:8000')
})