const fs = require('fs');


const readFile = function(fileName){
    return new Promise((resolve,reject) =>{
        fs.readFile(fileName,(err,data)=>{
            if(err) return reject(err);
            resolve(data);
        })
    });
}


// async
// async function fn(){
//     let f1 = await readFile('data/a.txt');
//     console.log(f1.toString());
//     let f2 = await readFile('data/b.txt');
//     console.log(f2.toString());
//     let f3 = await readFile('data/c.txt');
//     console.log(f3.toString());
// }

// fn();


// 3个文件彼此之间没有关系,没有执行先后顺序，可以用Promise.all

async function fn(){
    let [a,b,c] = await Promise.all([readFile('data/a.txt'),
                                    readFile('data/b.txt'),
                                    readFile('data/c.txt')]);
    console.log(a.toString());
    console.log(b.toString());
    console.log(c.toString());
}

fn();


// async function fn(){ // 表示异步，这个函数中有异步任务
//     let result = await xxx; // 表示后面结果需要等待
// }

/**
 *  async 特点
 *  1. await 只能放到async 函数中
 *  2. 相比 generator 语义化更强
 *  3. await 后面可以是 promise 对象，也可以是数字，字符串，布尔
 *  4. async函数返回是一个promise对象
 *  5. 只要 await 语句后面 promise 状态变成 reject，那么整个 async 函数会中断执行 
 * 
 */

