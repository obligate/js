const http = require('http');
const url = require('url');
const model = require('./models/model');

http.createServer(function(req,res){
    let method = req.method.toLowerCase();
    let urlObj = url.parse(req.url,true);
    let pathname = urlObj.pathname.replace("/","");
    try{
        model[pathname](req,res);
    }catch(err){
        model.index(req,res);
    }
}).listen(8001,function(req,res){
    console.log("http://localhost:8001");
});