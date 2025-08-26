// Q1. How do you convert a string to a number in JavaScript?
// 1. Number()
// let studentRank = "1234"
// let num = Number(studentRank)
// console.log(num)

// 2. parseInt()
// let studentRank = "1234.45"
// let num = parseInt(studentRank)
// console.log(num)

// 3. parseFloat()
// let studentRank = "12.33"
// let num = parseFloat(studentRank)
// console.log(num)

//Q2. Example of Synchronous programming and Asynchronous programming
// 1. Synchronous programming.
// console.log("start")
// function sync(){
//   for(let i = 1; i <= 5; i++){
//     console.log("num "+ i)
//   }
// }
// sync()
// console.log("end")

// 2. Asynchronous programming
// console.log("start")
// function async(){
//   setTimeout(()=>{
//     for(let i = 1; i <= 5; i++){
//       console.log("num "+ i)
//     }
//   }, 2000)
// }
// async()
// console.log("end")

// Q3. How can you create a private variable in JavaScript?
// function Counter(){
//  let count = 0;

//  this.increment = function(){
//   count++
//   return count
//  }
// }
// let counter = new Counter()
// console.log(counter.increment())
// console.log(counter.increment())

// Q4. what will be the output of 2 + "2" ?
// console.log(2 + "2")

// Q5. what will be the output of " 5" === "5 "
// output is false

// Q6. what is the type of NaN
// console.log(typeof NaN)


// Q7. what is the output of ?
// let x = null;
// let y = null;
// console.log(x + y);


// 8. what is the value of typeOf function(){}; return?
// console.log(typeof function(){})

// 9. what is the value of typeOf function(){}(); return?
// console.log(typeof function(){}())

// 10. what is the output of ?
// console.log(x)
// let x = 5;

// 11. what is the output of ?
// console.log(typeof([]))

// 12. what is the output of ?
// console.log(...'Mohan')

// 14. what is the output of ?
// console.log([...new Set([1, 2, 2, 3])])

// 15. what is the output of ?
// function tryFruits(...fruits){
//   console.log(...fruits)
// }
// tryFruits('apple', 'banana', 'orange')

// 16. what is the output of ?
// console.log(parseInt('15px'))

// 17. what is the output of ?
// console.log(x)
// var x = 10;