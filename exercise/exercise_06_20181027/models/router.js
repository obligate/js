const url = require('url');
const packRes = function(res){
    res.send = function(data){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        res.end(data);
    }
    return res; 
};
const router = function(){
    let self = this;
    this._get = {};
    this._post = {};

    let handle = function(req,res){
        packRes(res);
        const method = req.method.toLowerCase();
        const urlObj = url.parse(req.url,true);
        let pathname = urlObj.pathname;
        if(!pathname.endsWith("/")){
            pathname+="/";
        }
        if(self[`_${method}`][pathname]){
            if(method === "get"){
                req.query = urlObj.query;
                self[`_${method}`][pathname](req,res);
            }else{
                var postData = '';
                req.on('data', function (postDataChunk) {
                    postData += postDataChunk;
                });
                req.on('end', function () {
                    try {
                        postData = JSON.parse(postData);
                    } catch (e) { }
                    req.query = postData;
                    self['_' + method][pathname](req, res);
                });
            }
        }else{
           res.send("没有设置路由");
        }

    };
    handle.get = function(string,callback){
        if(!string.startsWith("/")){
            string = "/" + string;
        }
        if(!string.endsWith("/")){
            string += "/";
        }
        self._get[string] = callback;
    };
    handle.post = function(string,callback){
        if(!string.startsWith("/")){
            string = "/" + string;
        }
        if(!string.endsWith("/")){
            string += "/";
        }
        self._post[string] = callback;
    };
    return handle;
};


module.exports = function(){
    return new router();
}