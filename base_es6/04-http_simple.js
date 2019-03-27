const http = require('http')


const server = http.createServer()

server.on('request', function (req, res) {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.write('<h1>hello world</h1>你好，世界')
    res.end()
})

server.listen(8000, function () {
    console.log('pls acess:http://localhost:8000/')
})


