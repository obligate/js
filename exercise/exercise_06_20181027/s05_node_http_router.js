const http = require('http');
const app = require('./models/router')();

http.createServer(app).listen(8001,function(req,res){
    console.log("http://localhost:8001");
});

app.get("/",function(req,res){
    res.send("首页");
});
app.get("/index",function(req,res){
    res.send("index");
});
app.get("/home",function(req,res){
    res.send("home");
});