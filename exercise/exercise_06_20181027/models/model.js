
const app = {
    index:function(req,res){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.end("首页");
    },
    login:function(req,res){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.end("login");
    },
    dologin(req,res){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.end("dologin");
    }
};


module.exports = app;