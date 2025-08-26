// Loop ->  loops are used to run a block of code multiple times.
// -> Types of loops.....
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for of loop
// 5. for in loop
// 6. forEach loop

// 1. for loop
// let num = 5;
// for(let i = 1; i <= num; i++){
//   console.log(i)
// }

// 2. while loop
// let num = 5;
// let i = 1;
// while(i <= num){
//   console.log(i);
//   i++;
// }

// 3. do-while loop
// let num = 5
// let i = 1;
// do{
//   console.log(i)
//   i++;
// }while(i <= num);

// 4. for of loop
// let fruits = ["apple", "banana", "mango"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// 5. for in loop
// let studentDetails = {
//   name: 'Rohan Kumar',
//   age: 22,
//   city: 'Delhi'
// }
// for( let key in studentDetails){
//   console.log(key,':', studentDetails[key])
// }

// Q1. Write a program using a for loop to print numbers from 1 to 10.
// let num = 10;
// for(let i = 1; i <= num; i++){
//   console.log(i)
// }

// Q2. Print the multiplication table of 5 using a loop.
// let num = 5;
// let multi = 0;
// for(let i = 1; i <= 10; i++){
//   multi = i * num;
//   console.log(num + " * " + i + " = " + multi)
// }

// Q3. Write a program to find the sum of numbers from 1 to 100 using a loop.
// let num = 100;
// let sum = 0;
// for(let i = 1; i <= num; i++){
//   sum += i;
// }
// console.log(sum)

// Q4. Use a while loop to print all even numbers from 1 to 20.
// let num = 20;
// let evenNumber = []
// let i = 1;
// while( i <= num){
//   if(i % 2 === 0){
//     evenNumber.push(i)
//   }
//   i++;
// }
// console.log("even number is: " +evenNumber)

// Q5. Print numbers from 10 down to 1 using a for loop.
// let num = 10;
// for(let i = num; i >= 1; i--){
//   console.log(i)
// }

// Q6. Write a program that prints the factorial of a given number using a loop.
// (Example: factorial of 5 → 120)
// let num = 5;
// let fact = 1;
// for(let i = 1; i <= num; i++){
//   fact *= i;
// }
// console.log('factorial of '+ num + ' is: '+ fact)

// Q7. Use a for...of loop to print all the characters of a string.
// let studentName = 'Rohan'
// for(let char of studentName){
//   console.log(char)
// }

// Q8. Write a program to find the largest number in an array using a loop.
// let numbers = [1, 4, 2, 6, 3, 12, 8]
// let largestNum = numbers[0];
// let result = []
// for(let i = 1; i < numbers.length; i++){
//   if(numbers[i] > largestNum){
//     largestNum = numbers[i]
//   }
// }
// console.log(largestNum)

// Q9. Print the Fibonacci series up to 10 terms using a loop.
// let num = 10;
// let n1 = 0;
// let n2 = 1;
// let nextterm;
// for(let i = 1; i <= num; i++){
//   console.log(n1)
//   nextterm = n1 + n2;
//   n1 = n2;
//   n2 = nextterm;
// }

// Q10. Reverse a string using a loop.
// let studentName = 'Satyam';
// let reverseName = '';
// for(let i = studentName.length - 1; i >= 0; i--){
//   reverseName += studentName[i]
// }
// console.log(studentName)
// console.log(reverseName)

// Q12.	Write a program that checks if a number is prime using a loop.
// let num = 13;
// let isPrime = true;
// if (num < 2) {
//   isPrime = false
// }else{
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//      isPrime = false;
//      break
//     } 
//   } 
// }
// if(isPrime){
//   console.log(num + ' is a Prime Number')
// }else{
//   console.log(num + ' is not a Prime Number')
// }

// 13. Use a for...in loop to print all keys and values of an object.
// let studentDetails = {
//   name: 'Rishav Kumar',
//   age: 21,
//   city: 'delhi',
// }
// for(let key in studentDetails){
//   console.log(key+ ': ' + studentDetails[key])
// }

// 14. Write a program that prints all the numbers in an array greater than 50.
// let num = [23, 12, 33, 45, 55, 65, 78]
// let greaterNumber = []
// for(let i = 0; i <= num.length; i++){
//   if(num[i] > 50){
//     greaterNumber.push(num[i])
//   }
// }
// console.log(greaterNumber)

// 15.	Print the sum of all even and odd numbers separately from 1 to 20.
// let num = 20;
// let sumOfEven = 0;
// let sumOfOdd = 0;

// for(let i = 1; i <= num; i++){
//   if(i % 2 === 0){
//     sumOfEven += i;
//   }else{
//     sumOfOdd += i;
//   }
// }

// console.log("sum of all even number is: "+sumOfEven)
// console.log("sum of all odd number is: "+ sumOfOdd)