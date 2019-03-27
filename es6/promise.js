const fs = require('fs');


const readFile = function(fileName){
    return new Promise((resolve,reject) =>{
        fs.readFile(fileName,(err,data)=>{
            if(err) return reject(err);
            resolve(data);
        })
    });
}


readFile('./data/a.txt').then(suc=>{
    console.log(suc.toString());
    return readFile('./data/b.txt');
},err=>{
    console.log(err);
}).then(suc=>{
    console.log(suc.toString());
    return readFile('./data/c.txt');
},err=>{
    console.log(err);
}).then(suc=>{
    console.log(suc.toString());
},err=>{
    console.log(err);
});;