// Q. Create a functon using the function keyword that take a string as an argument and return the number of vowels in the string
// function numberOfString(str) {
//   let count = 0;
//   let newString 
//   for (const char of str ){
//     if(
//       char === 'a' || 
//       char === 'e' || 
//       char === 'i' || 
//       char === 'o' || 
//       char === 'u'){
//       count++;
//       newString = char
//       console.log(newString)
//     }    
//   }
//   return count
// }
//  let result = numberOfString('abseyso')

//  console.log(result)
  
// Q2. for a given array of number print the square of each value using the forEach loop
// let numbers = (arr)=>{
//   arr.forEach(element => {
//   let result = element * element
//   console.log(result)
//  });
// }
//  numbers([2, 4, 6, 7, 9])

// Q2. for a given array of number print the square of each value using the Map method
// let numbers = [3, 6, 4, 7, 9]
// let newArray = numbers.map((arr)=>{
//   return arr * arr
// })
// console.log('Original Array', numbers)
// console.log('New Array', newArray)

// Q3. Create a function and take the input from the user and square of each value
// let numbers = (num)=>{
//  let squareNumber = num.map((sqrNum)=>{
//   return sqrNum * sqrNum
//  })
//  return squareNumber
// }
// let result = numbers([2, 5, 7, 3, 8, 9])
// console.log(result)

// Q4. create a new array of element that given true for a condition/filter like all even numbers

// let numbers = (num)=>{
//    num.filter((val)=>{
//   if(val % 2 === 0){
//     return console.log(val, 'is even')
//   }else{
//      return console.log(val, 'is odd')
//   }
//  })
// }
// let result = numbers([33, 45, 22, 65, 78, 102, 99])

// Example of filter method
// let numbers = [2, 4, 6, 8, 9]

// let filterNumer = numbers.filter((num)=>{
//   return num > 3
// })
// console.log(filterNumer)

// Q5. Create a function and take some inputs numbers in the form of array and add all the numbers using reduce method.
// let numbers = (num)=>{
//  const sum = num.reduce((pre, curr)=>{
//   return pre + curr
//  }) 
//   return sum
// }
// let result = numbers([2, 4, 6, 8, 9])
// console.log('sum of array is:', result)

// Q6. Create a function and take some inputs numbers in the form of array and add all the numbers.
// let numbers = (num)=>{
// let newNumber = num[0]
// for(let i = 1; i < num.length; i++){
//    newNumber +=  num[i] 
// }
// return newNumber
// }
// let result = numbers([2, 4, 5, 7, 9])
// console.log('sum of array is:', result)

// Q7.Create a function and take some inputs numbers in the form of array and find the largest number.
// let numbers = (num)=>{
// let newNumber = -Infinity
// for(let i = 1; i < num.length; i++){
//   if(num[i] > newNumber){
//     newNumber = num[i]
//   }
// }
// return newNumber
// }
// let result = numbers([2, 4, 1, 5, 3, 7, 8, 6])
// console.log(result, ':is a largest number of an array')

// Q9. Create a function and take some inputs numbers in the form of array and find the largest number using reduce method
// let numbers = (num)=>{
//  let newNumber = num.reduce((pre, curr)=>{
//   return pre > curr ? pre : curr
//  })
//  return newNumber
// }
// let result = numbers([23, 43, 1, 33, 65, 10])
// console.log(result)

// Q10. Create a function and take some inputs numbers in the form of array and find the smallest number.
// let numbers = (num)=>{
// let newNumber = Infinity
// for(let i = 0; i < num.length; i++){
//   if(num[i] < newNumber){
//     newNumber = num[i]
//   }
// }
// return newNumber
// }
// let result = numbers([2, 5, 11, 17, 23, 19])
// console.log(result, ':is a smallest number of an array')

// Q11. Create a function and take some inputs numbers in the form of array and find the smallest number using reduce method
// let numbers = (num)=>{
//  let newNumber = num.reduce((pre, curr)=>{
//   return pre < curr ? pre : curr
//  })
//  return newNumber
// }
// let result = numbers([23, 43, 1, 33, 65, 10])
// console.log(result)

// Q12 Create a Array of marks of students. filter out of the marks of student that score 90
// let marks = (marks)=>{
//  let filteredMarks = marks.filter((val) => {
//     return val >= 90
//  })
//  return filteredMarks
// }
// let result = marks([60, 75, 65, 83, 90, 95, 88])
// console.log(result)

// Q13. (a) Take a number n as input from user and create an array of number 1 to n.(b)  calculate sum of all numbers in the array.(c) calculate factorial of all numbers in the array.

// let numbers = (num) => {
//   let arrNumber = []
//   for(let i = 1; i <= num; i++){
//     arrNumber.push(i)
//   }
//   console.log(`Array of ${num} is:`, arrNumber)
  
//   let sumOfNumber = arrNumber[0]
//   for(let i = 1; i < arrNumber.length; i++){
//    sumOfNumber += arrNumber[i]
//   }
//   console.log('Sum of an array is:',sumOfNumber)
//   let factNumber = arrNumber[0]
//   for(let i = 1; i < arrNumber.length; i++){
//     factNumber *= arrNumber[i]
//   }
//   console.log('Factorial of an array is:',factNumber)
//   }
//   let result = numbers(5)

// Q14. (a) Take a number n as input from user and create an array of number 1 to n.(b) use the reduce method to calculate sum of all numbers in the array.(c) use again reduce method to calculate factorial of all numbers in the array.

// let numbers = (num) => {
//   let arrayOfNumber = []
//    for(let i = 1; i <= num; i++){
//     arrayOfNumber.push(i)
//    }
//    console.log(`Array of ${num} is:`, arrayOfNumber)
//    const sum =  arrayOfNumber.reduce((pre, curr)=>{
//     return pre + curr
//    })
//    console.log('Sum of an array is:', sum)
//    const factorial = arrayOfNumber.reduce((pre, curr)=>{
//     return pre * curr
//    })
//    console.log('Factorial of an array is:', factorial)

//  }

//  numbers(prompt('Enter any number'))


// Q15. Create a function and write the program of accending order
// const numbers = (num)=>{
//  let accendingOrderNmber = num.sort((a, b)=>{
//   return a - b;
//  })
//  return accendingOrderNmber
// }
// const result = numbers([3, 5, 1, 4, 6])
// console.log(result)

//Q16. Write a programm of decending order
// num = [2, 5, 7, 1, 3, 4] 
//  for(let i = 0; i < num.length; i++){
//    for(let j = i + 1; j < num.length; j++){
//     if(num[i] > num[j]){
//       let temp = num[i]
//       num[i] = num[j]
//       num[j] = temp
//     }
//    }
//  }
// console.log(num)



// some javascript function related  question for logic building and practice......

//  Basic Function Logic Questions...........................

// 	1.	Write a function to check if a number is even or odd.
// let numbers = (num) => {
// if(num % 2 === 0){
//   console.log(num, 'is even number')
// }else{
//   console.log(num, 'is odd number')
// }
// }
// numbers(13452)

// 	2.	Create a function that returns the factorial of a number.
// const numbers = (num)=>{
// let newNumber = 1
// for(let i = 1; i <= num; i++){
//   newNumber *= i
// }
// return(newNumber)
// }
// let result = numbers(5)
// console.log(`Factorial is ${result}`)

// 	3.	Write a function that reverses a given string.
// const strings = (str)=>{
// let reverseName = []
// for(let i = str.length - 1; i >= 0; i--){
//   reverseName.push(str[i])
// }
// console.log(str)
// console.log(reverseName.toString())
// }
// strings('shivam')

// 	4.	Create a function to find the maximum of three numbers.
// const numbers = (num1, num2, num3)=>{
//   if(num1 > num2 && num1 > num3){
//    return num1
//   }else if(num2 > num1 && num2 > num3){
//     return num2
//   }else{
//     return num3
//   }
// }
//  let result = numbers(23, 12, 34)
//  console.log(result)

// 	5.	Create a function to find the maximum numbers of Array.
// const numbers = (num) => {
// let compairNum = num[0]
// for(let i = 1; i < num.length; i++){
//   if(num[i] > compairNum){
//     compairNum = num[i]
//   }
// }
// return(compairNum)
// }

// let result = numbers([2, 5, 3, 7, 9])
// console.log(`maximum number of array is: ${result}`)

// 	6.	Write a function that returns the sum of all numbers from 1 to n.
// const numbers = (num)=>{
// let sumNumbers = 0
// for(let i = 0; i <= num; i++){
//   sumNumbers += i
// }
// return(sumNumbers)
// }
// let result = numbers(234)
// console.log(`Sum of all number is: ${result}`)

//  Array-Based Function Questions..............................
// 	6.	Write a function to return the largest number in an array.
// const numbers = (num)=>{
// let largestNum = -Infinity
// for(let i = 0; i < num.length; i++){
//   if(num[i] > largestNum){
//     largestNum = num[i]
//   }
// }
// return(largestNum)
// }
// let result = numbers([22, 11, 43, 65, 76])
// console.log('Larges number of this array is', result)

	// 7.	Write a function to remove duplicates from an array.
// const numbers = (num)=>{
//   let newArraw = []
// for(let i = 0; i < num.length; i++){
//  if(!newArraw.includes(num[i]))
//  newArraw.push(num[i])
// }
// return(newArraw)
// }
// let result = numbers([24, 43, 23, 65, 21, 33, 33])
// console.log(result)

// 	9.	Write a function to find the second largest number in an array.
// const numbers = (num)=>{
// let firstLargestNumber = num[0]
// let secondLargestNumber = num[0]
// for(let i = 1; i < num.length; i++){
//   if(num[i] > firstLargestNumber){
//     firstLargestNumber = num[i]
//   }else if(num[i] > secondLargestNumber && num[i] - firstLargestNumber)
//   secondLargestNumber = num[i]
// }
// console.log(secondLargestNumber)
// console.log(firstLargestNumber)
// }
// let result = numbers([22, 12, 43, 55, 65, 47])

// 	10.	Write a function that checks if an array is sorted or not.
// const numbers = (num)=>{
//   let checkedArr = []
// for(let i = 0; i < num.length; i++){
// num[i] < num[i - 1] ? checkedArr.push(num) : null
// }
// console.log(checkedArr)
// }
// (numbers([1, 2, 3, 4, 5]))
// (numbers([5, 3, 2, 1]))

//  String-Based Function Questions..............................
// 	11.	Write a function to count the number of vowels in a string.
// const latters =  (latter)=>{
// 	let newLatter = []
// for(let i = 0; i < latter.length; i++){
// 	if(latter[i] === 'a' || latter[i] === 'e' || latter[i] === 'i' || latter[i] === 'o' || latter[i] === 'u'){
//     newLatter.push(latter[i])
// 	}
// }
// console.log(newLatter)
// }
// let result = latters('shivam')

// 	12.	Create a function to check if a string is a palindrome.
// const latters = (latter)=>{
// let initiliseLatter = latter.toLowerCase()
// let reverseLatters = []
// for(let i = initiliseLatter.length - 1; i >= 0; i--){
//   reverseLatters.push(initiliseLatter[i])
// }
// let newReverseLatter = reverseLatters.toString().split(',').join('')
// return newReverseLatter === initiliseLatter ? true : false 
// }
// console.log(latters('shivam'))
// console.log(latters('noon'))
// console.log(latters('MoOn'))

// 	14.	Write a function to capitalize the first letter of each word in a sentence.
// const words = (word) => {
//   let newWords = word.split(' ')
// 	let capatlise = newWords.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' '); 
// 	return capatlise
// } 
// let result = words('hello i am a student')
// console.log(result)