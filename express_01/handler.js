const path = require('path')


module.exports.index = function(req,res){
    res.render(path.join(__dirname,'views','index.html'));
}