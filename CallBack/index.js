// Callback = callback is a function that pass as a arrgument to another function. that is executed after some operation has been completed.

//-> Exapmle: 
// let studentName = (name, callback) => {
//   console.log("student Name is "+ name)
//   callback();
// }

// let message = ()=> {
//   console.log("Thank you for entering your name !")
// }
// studentName('Rohan', message)

// -> Example:
// let sum = (a, b, callback) => {
//   let result = a + b;
//   callback(result)
// } 
// let message = (result) => {
//  console.log('sum of your digit is: '+ result);
//  setTimeout(()=> {
//   console.log('your task is completed')
//  }, 2000)
// }
// sum(3, 5, message)

// -> Example:
// let numbers = [2, 4, 6, 1];
// numbers.forEach((num) => {
//   console.log(num)
// })

