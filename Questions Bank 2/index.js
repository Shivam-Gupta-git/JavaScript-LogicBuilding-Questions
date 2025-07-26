// Q1. log your name and favourite hobby to the consolt 
// console.log(
// {
//   name : 'shivam Kumar',
//   hobby : 'Coding'
// }
// )

// Q2. perform and log of the result of 45 * 2 - 10
// let result = 45 * 2 - 10;
// console.log(result)

// Q3. print the current year 
// let year = Date.now()
// let currentYear = new Date(year).getFullYear()
// console.log(currentYear) 

// Q4. create two variable for first and last name. concatnate and log them
// let first = 'shivam'
// let last  = 'Kumar'

// console.log(`${first} ${last}`)

// Q5. track the value ofa variable by loging it before and the after updating
// let firstName = 'shivam'
// console.log(firstName)

// let lastName = 'Gupta'
// console.log(lastName)

// console.log(`${firstName} ${lastName}`)

// 6. use console.error() to samulate an error message
// console.error('warning this is harmful for your system')

// Q7. print the square of the n number .
// let numbers = 12
// let squareOfNum = numbers * numbers
// console.log(squareOfNum)

// Q8. print the type of variable holding the value 
// let a = true
// let b = 12 
// let c = 'shivam'
// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))

// Q9. write a program to print if age is greater than 18
// let age1 = 17
// if(age1 > 18){
//   console.log(`yor is is greater than 18 you are capibale for riding a bick `)
// }else{
//   console.log(`yor is is less than 18 you are not capibale for riding a bick `)
// }

// Q10. log the result of 100/0 and observe the output
// console.log(100/0)

// Q11. create a program and declear a variable using let and log its value
// let number = 20
// console.log(number)

// Q12. create a program and declear a constant to store the value the PI
// const valueOfPI =  Math.PI
// console.log(valueOfPI)

// Q13. create a program to reassign a value to variable decleare with let and print it.

// let studentName = 'shivam'
// studentName = 'mohan'
// console.log(studentName) 

// Q14. create a program to check the type of null
// let a = null
// console.log(typeof(a))

// Q15. write a program to create a variable with a number as a string and find the type.
// let a = '22'
// console.log(typeof(a))

// Q16. write a program to create three variable and check the types of string, number, boolean
// let studentName = 'shivam Kumar'
// let studentAge = 22
// let studentResult = false

// console.log(typeof(studentName))
// console.log(typeof(studentAge))
// console.log(typeof(studentResult))

//Q17.  write a program to declear a variable without assigning the value and check the type
// let studentName
// console.log(typeof(studentName))

// Q18. write a program and use const to create a array. try ressigning the array and see the error
// const studentNames = []
// studentNames = ['shivam', 'shubham']
// console.log(studentNames)

// Q19. write a program to ressigning the value of an array
// let studentDetails = [
//   {
//     name: 'shivam kumar',
//     totalMarks: 78
//   },
//   {
//     name: 'shubham kumar',
//     totalMarks: 87
//   },
// ]
//  studentDetails = [
//   {
//     name: 'shivam kumar',
//     totalMarks: 88
//   }, 
//   {
//     name: 'shubham kumar',
//     totalMarks: 99
//   },
// ]
// console.log(studentDetails)
 
// Q20. create a program to print the number 1 to 50 using for loop
// let numbers = 50
// let count = 0 ;
// for(let i = 1; i <= numbers; i++){
//   count ++
//   console.log(count)
// }

// Q21. create a program to find the sum of the number from 1 to 10 using for loop
// let numbers = 10
// let sum = 0;
// for(let i = 1; i <= numbers; i++){
//   sum += i
// }
// console.log(sum)

// Q22. create a program to fing the each character of the string using for of loop
// let studentNames = 'shivam Kumar'
// for(let char of studentNames){
//   console.log(char)
// }

// Q23. create a programm to find the even or odd number between 1 to 20 and store in a array
// let numbers = 20
// let evenNum = []
// let oddNum = []
// for(let i = 1; i <= numbers; i++){
//   if(i % 2 === 0){
//     evenNum.push(i)
//   }else{
//     oddNum.push(i)
//   }
// } 
// console.log(`even number is ${evenNum}`)
// console.log(`odd number is ${oddNum}`)

// Q24. create a program to find the n number of factorial
// let numbers = 5;
// let fact = 1
// for(let i = 1; i <= numbers; i++){
//   fact *= i
// }
// console.log(`factorial of ${numbers} is ${fact}`)

// Q25. create a program to reverse a given array 
// let numbers = [2, 4, 1, 5, 6]
// for(let i = 0; i < Math.floor(numbers.length/2); i++){
//   let tepm = numbers[i]
//   numbers[i] = numbers[numbers.length - 1 - i]
//   numbers[numbers.length - i - 1] = tepm
// }
// console.log(numbers)

// Q25. create a program to reverse a given array using reverse() method
// let numbers = [2, 4, 1, 5, 6]
// let reverseNum = numbers.reverse()
// console.log(reverseNum)

// Q26. create a program using while loop and print numbers 1 to 100 divisible by 5
// let numbers = 100;
// let num = 1
// while(num <= numbers){
//   if(num % 5 === 0){
//     console.log(num)
//   }
//   num++;
// }

// Q27. create a program and using for in loop to iterate over an object and logs its key
// let studentDetails = {
//   name: 'shivam Kumar',
//   age: 22,
//   email: 'shivam@123gmail.com'
// }
// for(let key in studentDetails){

//   console.log(studentDetails[key])
// }

// Q28. create an array of your five friends name 
// let friendsName = ['Mohan', 'Sohan', 'Sambhu', 'Geeta', 'Ram']
// friendsName.forEach((value)=>{
//   console.log(value)
// })

// Q29. create a program to find the second element of an array
// let fruits = ['orange', 'apple', 'mango', 'banana']
// console.log(fruits[1])

// Q30. create a program to add two new element starting of an given array
// let numbers = [1, 4, 2, 5, 7, 8]
//  numbers.unshift(10)
//  numbers.unshift(12)
//  console.log(numbers)

// Q31. create a program to remove last elemant of an given array and update the array
// let numbers = [2, 1, 4, 3, 6, 8, 10]
// numbers.pop()
// console.log(numbers) 

// Q32. create a program and user slice() method to extract the first 3 element of an array
// let numbers = [1, 4, 3, 5, 2, 7]
// let extractNum = numbers.slice(0, 3)
// console.log(numbers)
// console.log(extractNum)

// Q33. create a program to check if a number is exist in an array 
// let numbers = [2, 4, 1, 44, 23, 65, 15]
// let checkNum = numbers.includes(22)
// console.log(checkNum)

// Q34. create a program to combine two array
// let numbers1 = [2, 4, 1, 5, 7]
// let numbers2 = [8, 9, 11, 12, 43, 15]

// let combinNum = numbers1.concat(numbers2)
// console.log(combinNum)

// Q35. create a program to sort numbers in ascending order in ginen array
// let numbers = [2, 4, 6, 1, 7]
// numbers.sort((a, b)=>{
//  return  a - b;
// })
// console.log(numbers)

// Q36. create a program to sort numbers in decending order in ginen array
// let numbers = [2, 4, 6, 1, 7]
// numbers.sort((a, b)=>{
//  return  b - a;
// })
// console.log(numbers)

//Q37. create a program to swapping two number of an given number 
// let numbers = [2, 4]
// for(let i = 0; i < numbers.length - 1; i++){
// let temp = numbers[i]
//  numbers[i] = numbers[i + 1]
//  numbers[i + 1] = temp
// }
// console.log(numbers)

// Q38. create a program to sort numbers in ascending order in ginen array
// let numbers = [1, 4, 2, 6, 8, 5]
// for(let j = 0; j < numbers.length; j++){
//   for(let i = 0; i < numbers.length - 1; i++){
//     if(numbers[i] > numbers[i + 1]){
//      let temp = numbers[i]
//      numbers[i] = numbers[i + 1]
//      numbers[i + 1] = temp
//     }
//   }
// }
// console.log(numbers)

// Q39. create a program to sort numbers in decending order in ginen array
// let numbers = [1, 4, 2, 6, 8, 5]
// for(let j = 0; j < numbers.length; j++){
//   for(let i = 0; i < numbers.length - 1; i++){
//     if(numbers[i] < numbers[i + 1]){
//       let temp = numbers[i]
//       numbers[i] = numbers[i + 1]
//       numbers[i + 1] = temp
//     }
//   }
// }
// console.log(numbers)

// Q40. create a program to copy of an original array 
// let numbers = [2, 4, 5, 3, 6, 1]

// let newNumbers = []
// numbers.forEach((value) => {
//   newNumbers.push(value)
// })
// newNumbers.push(10)
// console.log(`OriginalNumberArr: ${numbers}`)
// console.log(`copyNumberArr: ${newNumbers}`)

// Q41. create a function and check if number is even or odd
// let numbers = (num) => {
//  if(num % 2 === 0){
//   return 'Even Number'
//  }else{
//   return 'Odd Number'
//  }
// }

// let result = numbers(32)
// console.log(result)

// Q42. create a function and calulate the area of circle with given radius 
// let areaOfCircle = (radius)=>{
//  let calulate = Math.PI * radius * radius
//  return Math.round(calulate)
// }
// let result = areaOfCircle(5)
// console.log(result)

// Q43. create a function that accept the array and return the sum of an array
// let numbers = (num)=>{
// let newNum = 1
// for(let i = 0; i < num.length; i++){
//  newNum += num[i]
// }
// return newNum
// }
// let result = numbers([2, 4, 3, 5, 6, 1])
// console.log(result)

// Q44. create a function that check if a string starts with a specific character
// let studentNames = (pre, char) => {
//  return pre.toLowerCase().startsWith(char.toLowerCase())
// }
// let result = studentNames('shivam', 's')
// console.log(result)