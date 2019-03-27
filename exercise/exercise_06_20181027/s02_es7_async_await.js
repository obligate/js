/**
 * 普通方法和async 方法的区别
 * async  指明当前方法是一个异步方法,他的本质就是Promise
 * await  阻塞当前进程，获取异步方法的返回值，异步方法必须是async标识的方法或者Promise的方法
 */
// async 本质: 
function commonMethod(){
    return "Jupiter";
}
console.log(`普通方法的返回值==> ${commonMethod()}`);


async function asyncMethod(){
    return "Saturn";
}
console.log(`async的本质==>${asyncMethod()}`);
asyncMethod().then(data=>console.log(`获取async的返回值==> ${data}`));


// await 使用
// await 后面跟一个async的方法
async function  asyncMethodForAwait(){
    return "uranus";
}
async function testAwaitByAsync(){
    let d = await asyncMethodForAwait();
    console.log(d);
}
testAwaitByAsync();



// await 后面跟一个promise方法
function promiseMethod(){
    return Promise.resolve("Neptune");
}
async function testAwaitByPromise(){
    let d = await promiseMethod();
    console.log(d);
}
testAwaitByPromise();