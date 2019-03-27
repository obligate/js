const http = require('http')

http.createServer(function(req,res){
    if(req.url === '/'){
        res.end('index')
    }else if (req.url ==='/login'){
        res.end('login')
    }else{
        res.end('404,not Found')
    }
}).listen(8000,function(){
    console.log('http://localhost:8000')
})