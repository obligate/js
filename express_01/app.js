const express = require('express');
const path = require('path');
const config = require(path.join(__dirname,'config.js'));
const router = require('./router.js');

const app = express();
app.use(router);


app.listen(config.port,function(){
    console.log("http://localhost:" + config.port)
})

// 没有设置模板引擎，此时会报错