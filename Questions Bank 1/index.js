// Q.  How do you generate a random number between 0 and 1 in JavaScript?

// const  randomNumber = Math.random() * (1 - 0) + 0  
// console.log(randomNumber)

// Q.  How do you generate a random number between 5 and 10 in JavaScript?

// const randomNumber = Math.random() * (10 - 5) + 5;
// console.log(randomNumber)

// Q.  How to generate a random integer between two given values (inclusive)?
// const randomNumber = Math.floor(Math.random() * (10 - 5) + 5) 
// console.log(randomNumber)

// Q.  Math.flor() = Always rounds towards negative infinity
// const floorNumber1 = Math.floor(4.7)
// console.log(floorNumber1);
// const floorNumber2 = Math.floor(4.3)
// console.log(floorNumber2);

// Q.  Math.cel() = Always rounds towards positive infinity.
// const ceilNumber1 = Math.ceil(3.2)
// console.log(ceilNumber1)
// const ceilNumber2 = Math.ceil(3.7)
// console.log(ceilNumber2)

// Q.  Math.round() = 	 the decimal is 0.5 or higher, it rounds up & If the decimal is less than 0.5, it rounds down.
// const roundNumber1 = Math.round(5.6)
// console.log(roundNumber1)
// const roundNumber2 = Math.round(5.3)
// console.log(roundNumber2)

// Q.  How can you calculate the power of a number in JavaScript?
// let a = 5;
// let b = 3;
// const power = Math.pow(a, b)
// console.log(power)

// Q.  How do you calculate the square root of a number?
// let a = 9;
// const squareRoot = Math.sqrt(a)
// console.log(squareRoot)

// What does Math.abs() do? = abc can convert negative to positive
// const random1 = Math.abs(-22)
// console.log(random1)

// const random2 = Math.abs(-3.5)
// console.log(random2)

// Q.  How do you find the maximum value in an array of numbers?
// 1st way
// let arr = [3, 4, 5, 6]
// const max = Math.max(...arr)
// console.log(max)

// 2nd way
// let number = [15,4,6,13,10,12]
// let maximum = []
// for(let i = 0; i < number.length; i++){
//   if(number[i] > maximum){
//     maximum = number[i]
//   }
// }
// console.log(maximum)

// Q.  How do you find the minimum value in an array of numbers?
// 1st way
// const arr1 = [2,4,6,8,1,9]
// const minimum1 = Math.min(...arr1)
// console.log(minimum1)

// 2nd way
// const arr2 = [3,2,5,1,6,7,8]
// let minimum = arr2[0]

// for(let i = 0; i < arr2.length; i++){
//   if(minimum > arr2[i]){
//     minimum = arr2[i]
//   }
// 
// console.log(minimum)

// Q.  How do you calculate the sum of all numbers in an array?
// const number = [2, 3, 5, 6]
// let sum = 0
// for(let i = 0; i < number.length; i++){
//   sum +=  number[i]
// }
// console.log(sum)

// Q.  How do you calculate the average (mean) of an array of numbers?
// const number = [10, 20, 30, 40, 50]
// let sum = 0;
// for(let i = 0; i < number.length; i++){
//   sum += number[i]
// }
// let = totalNumber = number.length;

// let average = sum / totalNumber;

// console.log(average)

// Q.  How do you convert degrees to radians in JavaScript?
// let degree = 90;
// const radius = degree * [Math.PI/180]
// console.log(radius)

// Q.  How do you convert radians to degrees?
//  let radius = 1.5707963267948966
//  const degree = radius * [180/Math.PI]
//  console.log(degree)

// 

// for(let i  = 1; i <= 5; i++){
//  console.log(i)
// }

// Q.  How to calculate the factorial of a number using JavaScript?
// function factorial(n) {
//   let fact = 1;
//   for(let i = 1; i <= n; i++){
//     fact = fact * i
//   }
//   return fact
// }
// console.log(factorial(5))

// Q.How do you check if a number is even or odd
// let number = 8;
// if(number % 2 === 0){
//   console.log('even')
// }else{
//   console.log('odd')
// }

// ✅ Basic Loop Questions ✅

// Q.  Print numbers from 1 to 10 using a for loop.
// for(let i = 1; i <= 10; i++){
//   console.log(i)
// }

// let number = 10
// for(let i = 1; i <= number.length; i++){
//   console.log(i)
// }

// function numbers(n) {
//   let result = 0
//   for(let i = 1; i <= n; i++){
//      result = i
//   }
//   return result
// }
// console.log(numbers(10))

// Q.  Print even numbers between 1 and 20.
// for(let i = 1; i <= 20; i++){
//   if(i % 2 === 0){
//     console.log(i)
//   }
// }

// let numbers = 50; 
// for(let i = 1; i <= numbers; i++){
//   if(i % 2 === 0){
//     console.log(i)
//   }
// }

// Print odd numbers between 1 and 20
// for(let i = 1; i <= 20; i++){
//   if(i % 2 !== 0){
//     console.log(i)
//   }
// }

// let number = 20;
// for(let i = 1; i <= number; i++){
//   if(i % 2 !== 0){
//     console.log(i)
//   }
// }

// Q.  Calculate the sum of numbers from 1 to 100.
// let sum = 0;
// for(let i = 1; i <= 100; i++){
//   sum = sum + i;
// }
// console.log(sum)

// let number = 100;
// let sum = 0
// for(let i = 1; i <= number; i++){
//   sum += i
// }
// console.log(sum)

// 5.	 Calculate the factorial of a number using a loop.
// let fact = 1;
// for(let i = 1; i <= 5; i++){
//   fact = fact * i;
// }
// console.log(fact)

// let number = 5;
// let fact = 1;
// for(let i = 1; i <= number; i++){
//   fact *= i
// }
// console.log(fact)

// 6.	 Print the multiplication table of a number (e.g., 5 × 1 = 5 … 5 × 10 = 50).
// const number = 22;
// let table;
// for(let i = 1; i <= 10; i++){
//   table = number * i
//   console.log(number ,'*', i , '=', table)
// }

// 7.	 Print numbers from 10 to 1 (reverse order).
// for(let i = 10; i >= 1; i--){
//   console.log(i)
// }

// let number = 10
// for(let i = number; i >= 1; i--){
//   console.log(i)
// }
// ⸻

// ✅ Intermediate Loop Questions: ✅
// 8.	 Print the sum of all even numbers from 1 to n.
// let number = 10;
// let sum = 0
// for(let i = 1; i <= number; i++){
//   if(i % 2 === 0){
//     sum = sum + i
//   }
// }
// console.log(sum)

// 9.	 Count how many numbers between 1 and 100 are divisible by 3.
// let num = 100
// let total = 0
// for(let i = 1; i <= 100; i++){
//   if(i % 3 === 0){
//     total++
//   }
// }
// console.log(total)

// let count = Math.floor(100/3)
// console.log(count)

// 10.  Check if a number is a prime number using a loop.
// let number = 25
// let isPrime = true
// if(number <= 1){
//   isPrime = false
// }else{
//   for(let i = 2; i <= Math.sqrt(number); i++){
//     if(number % i === 0){
//       isPrime = false
//       break
//     }
//   }
// }
// if(isPrime){
//   console.log(number, 'is Prime')
// }else{
//   console.log(number, 'is not Prime')
// }

// 11.  Find the sum of digits of a given number (e.g., 123 → 1+2+3 = 6).
// 12.  Reverse a number (e.g., input 1234 → output 4321).

// 13.  Generate Fibonacci series up to n terms.
// let n = 10; 

// let n1 = 0, n2 = 1; 
// let nextTerm;

// for (let i = 1; i <= n; i++) {
//   console.log(n1);
  
//   nextTerm = n1 + n2; 
//   n1 = n2;            
//   n2 = nextTerm;      
// }
// console.log("Fibonacci Series:");
// ⸻

// Q.  How do you check if a number is even or odd?
// let num = 5;
//   if(num % 2 === 0){
//    console.log(num, 'It is a Even Number') 
//   }else{
//     console.log(num, 'it is a Odd number')
//   }

// Q.  How do you find the greatest common divisor (GCD) of two numbers?
// let num1 = 12;
// let num2 = 14;
// let count1 = 0
// let count2 = 0
// for(let i = 1; i <= num1; i++){
//   if(num1 % i === 0){
//     count1 ++
//   }
// }
// for(let i = 1; i <= num2; i++){
//   if(num2 % i === 0){
//     count2 ++
//   }
// }
// if(count1 > count2){
//   console.log(num1, ' Is a greatest common divisor')
// }else{
//   console.log(num2, ' Is a greatest common divisor')
// }


// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// console.log(gcd(22, 8))

// Q.  How do you generate a random floating-point number between two values

// function floating(a, b) {
//   return Math.random() * (a - b) + b
// }
// console.log(floating(5, 10))


// Q. How do you calculate the hypotenuse of a right triangle given the other two sides?
// function calHypotenuse(a, b) {
//   let c = Math.sqrt(a**2 + b**2)
//   return c
// }
// console.log(calHypotenuse(3, 4))

// Q.  How do you calculate the area of a circle given its radius?

// let radius = 5;
// let area = Math.PI * radius ** 2
// console.log('Area of circle is', area)

// function area(radius) {
//   let area = Math.PI * radius ** 2
//   return area
// }
// console.log(area(5))

// Q.  How do you calculate the area of a rectangle?
// let length = 8;
// let width = 5

// let area = length * width;
// console.log(area)

// function areaOfRectangle(l, w) {
//    const area = l * w;
//    return area
// }
// console.log(areaOfRectangle(8, 5))

// Q. How do you convert a string to a number safely
// let str = '123.456'
// let intNumber = parseInt(str)
// console.log('integer Number', intNumber)

// Q. How do you parse a string containing a floating-point number?
// let str = '123.456'
// let floatNumber = parseFloat(str)
// console.log('floating Number', floatNumber)

// Q. How do you check if a number is an integer

// let inputValue = '123.342'
// let integerValue = parseInt(inputValue)
// console.log('Integer Value', integerValue)

// let floatingValue = parseFloat(inputValue)
// console.log('Floating Value', floatingValue)

// Q. How do you generate a random hexadecimal color code

// function getRandomHexColor() {
//   const hex = Math.floor(Math.random() * 0xffff).toString(16)
//   return '#' + hex.padStart(6, '0')
// }
// console.log(getRandomHexColor())

// Q.  How do you calculate the percentage of a number
// const percentageOfNumber = (part, whole)=>{
//   return new Promise((resolve, reject) => {
//     const result = (part / whole) * 100;
//     resolve('sucess')
//     console.log(`${result} %`) 
//   })
// }
// percentageOfNumber(50, 400)

// Q. How do you sort numbers in an array in ascending order?
// const num = (arr)=>{
//   const sortNum = arr.sort((a, b) => a - b)
//   console.log(sortNum)
// }
// num([3, 4, 2, 6, 1])

// Q. How do you find the median of an array of numbers?
// const num = (arr)=>{
//   arr.sort((a, b) => a - b);
//   const mid = Math.floor(arr.length / 2)
//   if(arr.length / 2 !== 0){
//     return arr[mid]
//   }else{
//     return (arr[mid - 1] + arr[mid]) / 2
//   }
// }
// num([4, 5, 2, 7, 1, 3])

// console.log(num([5, 2, 9, 1, 7]))

// Q. How do you calculate compound interest in JavaScript?
// const compoundInt = (p, r, n, t)=>{
//  const finalAmount = p * Math.pow((1 + r/n), n * t );
//  const CI = finalAmount - p;
//  const result = CI.toFixed(2)
//  console.log(result);
// }
// compoundInt(10000, 0.10, 1, 2)

//Q.  How do you check if a number is a perfect square?
// const perfectSqr = (num)=>{
// const sqrt = Math.sqrt(num)
//  const result = Number.isInteger(sqrt)
//  console.log(result)
// }
// perfectSqr(16)