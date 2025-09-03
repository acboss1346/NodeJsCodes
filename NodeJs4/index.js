const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

// causing callback hell the code jsut below
// fs.readFile('x.txt', 'utf-8', (error, data)=>{
//     let result = ''
//     if(error){
//         console.log('error while reading file x.txt')
//     }
//     else{
//         result = result+data
//     }
//         fs.readFile('y.txt', 'utf-8', (error, data)=>{

//         if(error){
//             console.log('error while reading file y.txt')
//         }
//         else{
//             result = result+data1
//         }
//             fs.readFile('x.txt', 'utf-8', (error, data)=>{
//             let result = ''
//             if(error){
//                 console.log('error while reading file x.txt')
//             }
//             else{
//                 result = result+data2
//             }
//                 fs.writeFile('result.txt', result, (error)=>{
//                     if(!error){
//                         console.log('data read successfully')
//                     }
// })
// })
// })
// })

// const promise = new Promise((resolved, rejected)=>{
//     resolved(20)
// })
// promise.then(data =>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })

// const promise1 = new Promise((resolved, rejected)=>{
//     rejected('Error::')
// })
// promise.then(data =>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })

// function readFilePromise(filePath){
//     return new Promise ((resolved, rejected)=>{
//         fs.readFile(filePath, 'utf-8', (error, data)=>{
//             if(error){
//                 rejected(error)
//             }
//             else{
//                 resolved(data)
//             }
//         })
//     })
// }

// readFilePromise('note.txt').then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })


// function readFilePromise(filename) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, 'utf-8', (err, data) => {
//       if (err) reject(err);
//       else resolve(data);
//     });
//   });
// }

// function writeFilePromise(filename, data) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(filename, data, (err) => {
//       if (err) reject(err);
//       else resolve();
//     });
//   });
// }

// // Usage
// let result = '';

// readFilePromise('x.txt')
//   .then(data1 => {
//     result += data1;
//     return readFilePromise('y.txt');
//   })
//   .then(data2 => {
//     result += data2;
//     return readFilePromise('x.txt');
//   })
//   .then(data3 => {
//     result += data3;
//     return writeFilePromise('result.txt', result);
//   })
//   .then(() => {
//     console.log('data read successfully');
//   })
//   .catch(err => {
//     console.log('Error:', err.message);
//   });


// fs.readFile('file.txt', 'utf-8')
// .then((data)=> console.log(data))
// .catch((error)=>console.log(error))


