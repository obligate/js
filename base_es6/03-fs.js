const  fs = require('fs')
const path = require('path')
// const  msg = "hello world"
// fs.writeFile('./hello.txt',msg,'utf-8',function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('写入文件成功')
//     }
// })


// fs.readFile('./hello.txt',function(err,data){
//     if(err){
//         throw err
//     }else{
//         console.log(data.toString('utf-8'))
//     }
// })


// fs.readFile('./hello.txt','utf-8',function(err,data){
//     if(err)
//         throw err
//     else
//         console.log(data)
// })


// promise

const readFile = function(fileName){
    return new Promise((resolve, reject)=>{
        fs.readFile(fileName,function(err,data){
            if(err) return reject(err)
            return resolve(data)
        })
    })
}

const fileName = path.join(__dirname,'hello.txt')
readFile(fileName).then(sucess=>{
    console.log(sucess.toString())
},err=>{
    console.log(err)
})

console.log(__dirname)
console.log(__filename)



