/**
 * js中如何获取异步方法的值呢？
 * 1. 通过callback的方式
 * 2. 通过Promise的方式
 */

// 1. callback
//  function callbackMethod(callback){
//         setTimeout(() => {
//             let name = "mercury";
//             callback(name);
//         }, 1000);
//  }

//  callbackMethod((data)=>{
//     console.log(data);
//  });


 // 2. promise,把异步代码放到Promise里面
 function promiseMethod(){
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let name = "venus";
            resolve(name);
        }, 1000);
     });
 }
 promiseMethod().then(data=> console.log(data));


