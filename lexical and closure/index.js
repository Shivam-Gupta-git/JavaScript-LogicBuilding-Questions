// Lexical Scoping......................
// Parent to Child Sharing................
// inner functio can access the outer function variables but outer function can't access the inner function variable.

// let outerFunction = ()=>{
//   let outerFunctionNumber = '123'
//    let innerFunction = ()=>{
//     let innerFunctionNUmber = '321' + outerFunctionNumber
//     console.log(innerFunctionNUmber)
//    }
//    innerFunction()
// }
// outerFunction()

// Parent to child or child Sharing............
// each inner function can access the outer function variable but inner function can't access the variable each other.

// let outerFunction = ()=>{
//  let outerFunctionName = 'Mohan'
//   let firstInnerFunction = ()=>{
//     let firstInnerFunctionName = 'Shubham ' + outerFunctionName
//     console.log(firstInnerFunctionName)
//   }
//   let secondInnerFunction = ()=>{
//     let secondInnerFunctionName = 'Visham ' + outerFunctionName
//     console.log(secondInnerFunctionName)
//   }
//   firstInnerFunction()
//   secondInnerFunction()
// }
// outerFunction()

// Closure...........................
// when return a function then not only return function they can return all scope means all lexical scope

// let outerFunction = ()=>{
//   let outerFunctionName = 'Sohan'
//   let innerFunction = ()=>{
//     let innerFunctionName = 'Sambhu ' + outerFunctionName
//     console.log(innerFunctionName)
//   }
//   return innerFunction
// }

// const myFun = outerFunction()
// myFun()



