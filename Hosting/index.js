// var declarations are hoisted, but only the declaration (var name), not the assignment
// console.log(studentName1)
// var studentName1 = 'Mohan'

// let and const are also hoisted but not initialized.

// console.log(studentName2)
// let studentName2 = 'Mohan'

// console.log(studentName3)
// const studentName3 = 'Mohan'


// studentName4()
// function studentName4(){
//   console.log('shivam kumar')
// }

// function expression and class expression can't hosted
// studentName5()
// const studentName5 = () => {
//   console.log('shivam kumar')
// }

console.log(studentDetails(2, 5))
function studentDetails (num1, num2){
  const sum = num1 + num2
  return sum
}