// Named Function................. 
// function sum (){
//   let a = 10;
//   let b = 20;
//   let sum = a + b;
//   return sum;
// }

// console.log(sum())

// Arrow Function.................
// let multi = ()=> {
//   let a = 10;
//   let b = 20;
//   let multi = a * b;
//   return multi;
// }
// console.log(multi())

// Example of array..........................
// let name1 = ["mohan", "sohan","Ram"]
// console.log(name1)
// for(let i = 0; i < name1.length; i++){
//   console.log(i)
// }
// name1.push('Shubham')
// console.log(name1)

// How do you add an element to an array? Example......................
// let name1 = ["ram", "mohan", "sohan"];
// console.log(name1)

// 1. push
// name1.push('shubham')
// console.log(name1)

// 2. unshift
// name1.unshift('shubham')
// console.log(name1)

// 3. splice
// name1.splice(2, 0, "shubham");
// console.log(name1);

// Example of an object....................
// let student = {
//   name : 'ram',
//   age: 21,
//   cource: 'BCA'
// }
// console.log(student)
// console.log(student.name)

// Access a property of an object................... 
// let student = {
//   name : 'ram',
//   age: 21,
//   cource: 'BCA'
// }

// 1. dot notation.
// console.log(student.name);
// 2. bracket notation
// console.log(student["age"])

// Comparision between '==' or '==='...............................
// let number1 = 6
// console.log(typeof(number1))

// let number2 = '6'
// console.log(typeof(number2))

// '=='
// if(number1 == number2){
//   console.log('equal')
// }

// '==='
// if(number1 === number2){
//   console.log('equal')
// }else{
//   console.log('not equal')
// }

//Example of Callback function..........................

// let message = (sum) => {
//   console.log("Sum of two number is: ", sum)
// }

// let sum = (a, b, callback) => {
//   let sum = a + b;
//   callback(sum)
// }
// sum(4, 5, message)

// anoter example...
// let message = () => {
//   console.log("work id done. Thank You!")
// }

// let sum = (a, b, callback) => {
//  let sum = a + b;
//  console.log("Sum of two number is: ",sum)
//  setTimeout(()=> {
//   callback()
//  },1000)
// }

// sum(3, 7, message)

//  How do you loop through an array in JavaScript?.................................
// let name1 = ["ram", "mohan", "sohan", "ajit"]
// console.log(name1);

// 1. for loop.
// for(let i = 0; i < name1.length; i++){
//   console.log(name1[i]);
// }

// 2. for-of loop.
// for(let name of name1){
//   console.log(name);
// }

// 3. for-each.
// name1.forEach(name => console.log(name));

// 4. map mehod.
// let newList = name1.map(item => item.toUpperCase())
// console.log(newList);

// Example of callback function..............................
// let great = function(){
//   console.log('hello...')
// }

// let sum = (a, b, callback) => {
//  let sum = a + b;
//  console.log(sum)
//  setTimeout(()=> {
//   callback()
//  },2000)
// }

// sum(3, 6, great)

//Example of javascript Promise....................................

// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if(success){
//     resolve("Data resolve")
//   }else{
//     reject("Data reject")
//   }
// })

// myPromise.then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)
// })

// Example of javascript clouser.......................
// let counter = ()=> {
//   let count = 0;
//   return function(){
//     count++;
//     console.log(count)
//   }
// }

// let add = counter()
// add() 
// add() 
// add() 

// Example of try catch.................................
// try {
//   let result = JSON.parse('{name:"Shivam"}'); // invalid JSON
//   console.log(result);
// } catch (error) {
//   console.log("Error occurred:", error.message);
// } finally {
//   console.log("Done");
// }

// Example of Synchronous Programming ...................................................
// let Synchronous = (a, b) => {
//  let sum = a + b;
//   return sum
// }
// let result =  Synchronous(3, 6)
// console.log(result)

// Example of Asynchronous Programming...................................................

// console.log('first')
// let sum = (a, b, callback) => {
//   let result = a + b;
//   setTimeout(() => {
//     callback(result);
//   }, 2000);
// }
// sum(3, 6, (data) => {
//   console.log("second", data);
// });

// console.log('third')



