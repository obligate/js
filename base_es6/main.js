import { firstname } from './profile';



console.log(firstname)  

// 
//  1. 使用babel，通用方法
//  + npm install --save-dev babel-preset-env babel-cli
//  全局使用： npm install --global babel-cli
//  2. 新建一个.babelrc文件，并在里面写入
// {
//     "presets": ["env"]
// }
// 3. babel-node main.js 