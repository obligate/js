const http = require('http');
const url = require('url');
const ejs = require('ejs');
const path = require('path');

http.createServer(function(req,res){
    let method = req.method.toLowerCase();
    let urlObj = url.parse(req.url,true);
    let pathname = urlObj.pathname;
    if(pathname === "/" || pathname === "/index" || pathname === "/home"){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.end("你好，中国");
    }else if(pathname === "/login"){
        ejs.renderFile(path.join(__dirname,'views','login.ejs'), 
                    {title:"登录页面"},
                    function(err,data){
                res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                res.end(data);
        });
    }else if(method==="post" && pathname === "/dologin"){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        let poststr = "";
        req.on("data",function(chunk){
            poststr += chunk;
        });
        req.on("end",function(err,chunk){
            if(!err){
                res.end(poststr);
            }else{
                console.log(err);
            }
        })
    }else{
        res.writeHead(404,{"content-type":"text/html;charset=utf-8"});
        res.end("404");
    }
}).listen(8001,function(req,res){
    console.log("http://localhost:8001");
});