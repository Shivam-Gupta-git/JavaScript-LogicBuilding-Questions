// 1. Function with return value
// function sum(){
//   const result =  'hello Shivam'
//   return result
// }
// console.log(sum())

// 2. Function with parameters
// function sum(a, b){
//   const result = a + b;
//   return result
// }
// console.log(sum(5, 7))

// 3. Function Expression
// let sum = function(a, b){
//   const result = a + b
//   return result
// }
// console.log(sum(4, 6))

// 4. Arrow Function
// const sum = (a, b)=>{
//   const result = a + b;
//   return result
// }
// console.log(sum(5, 8))

// 5. Function Declration
// function sum(){
// console.log('hello world')
// }

// CallBack Function

// let listName = ['ram', 'shayam', 'mohan']
// const nameList = ()=>{
// for(let i = 0; i <= listName.length; i++){
//   console.log(i)
// }
// }

// let count = 0
// for(let i = 0; i < listName.length; i++){
//   count ++;
//   console.log(count)
// }

// Asynchronous Programming

// console.log('1')
// console.log('2')
// setTimeout(()=>{
//   console.log('hello')
// }, 4000)
// console.log('3')
// console.log('4')

// CallBack in Function............... 

// const sum = (a, b)=>{
//  console.log(a + b)
// }
// const callback = (a, b, callback)=>{
//   callback(a, b)
// }
//  callback(4, 6, sum)

// const getData = (dataId, nextData)=>{
//  setTimeout(()=>{
//   console.log('data', dataId)
//   if(nextData){
//     nextData()
//   }
//  }, 2000)
// }
// getData(1, ()=>{
//   getData(2);
// })

// callBack Hell 
// const playerName = (name, nextData)=>{
//   setTimeout(()=>{
//   console.log('Player Name is', name)
//   if(nextData){
//     nextData()
//   }
//   }, 2000)
// }
// playerName('Rohan', ()=>{
//   console.log('Getting PlayerName2....')
//   playerName('Ram', ()=>{
//     console.log('Getting PlayerName3....')
//    setTimeout(()=>{
//     console.log('Mohan')
//    }, 5000)
//   })
// })

// Promise.......................

// let promise = new Promise  ((resolve, reject) => {
//   console.log('hello')
//     resolve('Number Is Accepted')
// })

// let studentName = (name)=>{
//   return promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log('Student Name is.', name)
//       resolve('Sucessfully')
//     }, 5000)
//   })
// }
// studentName('Shivam')

// let Numbers = (num) => {
//   return promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       if(num % 2 === 0){
//         console.log(num, 'is a even number')
//         resolve('number is accepted')
//       }else{
//         console.log(num, 'is a odd number')
//         reject('number is rejected')
//       }
//     }, 5000)
//   })
// }
// Numbers(7)


// let numbers = (num) => {
//   return new Promise((resolve, reject) => {
//     if(num % 2 === 0){
//       console.log(num, 'is a even number')
//       resolve('number is accepted')
//     }else{
//       console.log(num, 'is a odd number')
//       reject('number is rejected')
//     }
//   })
// }

// let promise = numbers(5)
//  promise.then((res)=>{
//   console.log('Number is Accepted', res)
// })

//  promise.catch((err)=>{
//   console.log('Number is rejected', err)
// })


// Promise Chaining.......................

// const AsynchFun1 = ()=>{
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      console.log('data1')
//      resolve('sucess')
//     }, 4000)
//   })
// }

// const AsynchFun2 = ()=>{
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//      console.log('data2')
//      resolve('sucess')
//     }, 4000)
//   })
// }
// console.log('data1 is fetching')
// AsynchFun1().then(()=>{
//   console.log('data2 is fetching')
//   AsynchFun2().then(()=>{})
// })

// const getData = (num)=>{
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       console.log('getData', num)
//       resolve('Data Sucessfully Print')
//     }, 2000)
//   })
// }

// getData(1).then((res)=>{
//   return getData(2)
// }).then((res)=>{
//   return getData(3)
// }).then((res)=>{
//   return getData(4)
// }).then((res)=>{
//   console.log(res)
// })

// Async Await .....................

// const getData = (num) => {
//  return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log('getData', num)
//     resolve(200)
//   }, 2000)
//  })
// }

// async function datalist(){
//  await getData(1);
//  await getData(2);
//  await getData(3);
// }

// datalist()

// IIEF.................
// const getData = (num)=>{
//  return new Promise((resolve, reject) => {
//   setTimeout(()=>{
//    console.log('getData', num)
//    resolve('sucess')
//   }, 3000)
//  })
// }

// (async ()=>{
//   console.log('data1 is fetching')
//   await getData(1);
//   console.log('data2 is fetching')
//   await getData(2);
//   console.log('data3 is fetching')
//   await getData(3);
//   console.log('data4 is fetching')
//   await getData(4);
//   console.log('data5 is fetching')
//   await getData(5);
//   console.log('data6 is fetching')
//   await getData(6);
// })()