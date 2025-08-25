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
let numbers = [1, 4, 2, 6, 3, 12, 8]
let largestNum = numbers[0];
let result = []
for(let i = 1; i < numbers.length; i++){
  if(numbers[i] > largestNum){
    largestNum = numbers[i]
  }
}
console.log(largestNum)
