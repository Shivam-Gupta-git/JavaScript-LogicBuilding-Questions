/**---------Q.1 
 Write a JavaScript program that creates a simple JavaScript program that manipulates strings using various string methods. 
 --------------*/

// let conctString = (str1, str2) => {
//   let concat = str1.concat(str2)
//   return concat;
//   }

//   console.log(conctString("Hello", "World"));

//   let findInder = (str1, str2) => {
//   let findIndex = str1.concat(str2);
//   return findIndex.indexOf("World")
//   }
//   console.log(findInder("Hello", "World"));

/**---------Q.2 
 Write a program to calculate the area of the rectangle for the given dimension (len and wid). Store the area in the result variable. 
 ----------*/

// let areaOfRectangle = (len, wid)=>{
// let result = len * wid;
// return result;
// }

// console.log(areaOfRectangle(5, 5));

/**-----------Q.3 
 solve this problem 
 -----------*/
// let x = 7;
// let y = 2;
// console.log(x ** y);

/**---------------Q.4 
 Now build a calculator application, and we have to implement basic arithmetic operations. Write a JavaScript program that takes two numbers as input, performs addition, subtraction, multiplication, and division, and displays the results. 
 --------------*/

// let addition = (num1, num2) => {
//   let answer;
//   answer = parseFloat(num1) + parseFloat(num2);
//   return answer;
// };

// let subtraction = (num1, num2) => {
//   let answer;
//   answer = num1 - num2;
//   return answer;
// };

// let multiplication = (num1, num2) => {
//   let answer;
//   answer = num1 * num2;
//   return answer;
// };

// let division = (num1, num2) => {
//   let answer;
//   answer = num1 / num2;
//   return answer;
// }

// console.log(addition(4, 2));
// console.log(subtraction(4, 2));
// console.log(multiplication(4, 2));
// console.log(division(4, 2));

/**-------------Q.5 
 Develop a program to calculate the area of a triangle. The program takes the base and height of a triangle as input and calculates the area using the appropriate arithmetic operators for multiplication and division. 
 -----------*/

// let areaOfTriangle = (base, height) => {
//   let result;
//   result = 1/2 * base * height;
//   return result
// }

// console.log(areaOfTriangle(10, 20));

/**------------Q.6 
 find the output 
 --------------*/
// let x = "2";
// let y = 5;
// let result = x * y;
// console.log(typeof(result)); // Number

// console.log(result === 10); // true

/**-----Q.7 
 Create a simple online shopping discount calculator. The program should take the input for the original price of a product and the discount percentage. It should then calculate and display the final discounted price. 
 -------*/
// let shoppingDiscountCalculator = (original_price, discount_percentage) => {
//   let price = parseFloat(original_price);
//   let discount = parseFloat(discount_percentage);

//   let discount_Amount = (price * discount) / 100;
//   let answer;
  
//   answer = price - discount_Amount;
//   return answer;

// }
// console.log(shoppingDiscountCalculator("50.75", "15.5"));

/**-----Q.8 
 calculate the fahrenheit and display ishot or not */
// let temperatureInCelcius = (celsius)=> {
// let fahrenheit;
// fahrenheit = (celsius * 9/5) + 32;
// let ishot;
// ishot = fahrenheit > 86;
// return ishot;
// }

// console.log(temperatureInCelcius(35));

/**-----Q.9 
 Write a JavaScript function named checkEligibility that takes an integer input age and checks if the user's age meets the eligibility criteria. The function should return a string indicating whether access is "granted" or "denied" based on the following conditions 
 -----*/
// let checkEligibility = (age) => {
// let answer; 
// if(age >= 18){
//   answer = "granted"
// }else{
//   answer = "denied"
// }
// return answer
// }
// console.log(checkEligibility(15));

/**------Q.10 
 You are developing an online shopping website, and you want to implement a discount system based on the total purchase amount. Write a JavaScript program using if statements and operators that calculate and display the total cost after applying a discount. The discount rules are as follows: 
 ------*/
// let discountCalculator = (totalAmount) => {
// let answer;
// let discount;
// if(totalAmount >= 100){
//    discount = totalAmount * (10/100);
//    answer = totalAmount - discount;
// }else if(totalAmount>= 50 && totalAmount < 99.99){
//  discount = totalAmount * (5/100);
//  answer = totalAmount - discount;
// }else{
//   answer = "no discount"
// }
// return answer
// }

// console.log(discountCalculator(200));
// console.log(discountCalculator(80));

/**----Q.11 
 find the discount 
 -------*/
// let dis = (amount) => {
//   let result;
//   let disAmount;
//   disAmount = amount * (10/100);
//   result = amount - disAmount;
//   return result
// }

/**-----Q.12 
 You are required to implement a grading system for a school based on the marks obtained by students in a test. The goal is to write a JavaScript program that determines the grade of a student using conditional statements. -----*/

// function main(marks) {

//   let result;

//   if (marks >= 90) {
//     result = "A";
//   } else if (marks >= 80) {
//     result = "B";
//   } else if (marks >= 70) {
//     result = "C";
//   } else if (marks >= 60) {
//     result = "D";
//   } else {
//     result = "F";
//   }

//   return result;

// }

// console.log(main(89));
// console.log(main(93));

/**-----Q.13 
 Email Validation Solution 
 ----------*/
// let email = "asa@gmail.io"
// let emailLength = email.length;

// let dotIndex = email.lastIndexOf(".")

// let atIndex = email.lastIndexOf('@')

// let lastIndex = emailLength - 1;

// if(emailLength < 11 || 
//   lastIndex - dotIndex < 2 || 
//   lastIndex - dotIndex > 3 || 
//   dotIndex - atIndex < 3){
//     console.log("Invalid Email");
//   }else{
//     console.log("valid email");
//   }


/**----Q.14 
 You have already completed the email validation program using "||" operator. Now modify the code and rewrite the conditions to validate the email using the "&&" operator.

Additionally, include one more condition that: Email should have at least 3 characters before “@.”

If the email is valid, store the value of the email in the result variable with a welcome message. If the email is invalid, store the string "invalid email" in the result variable. 
------*/
// function main(email) {
//   let result;
//   // Step 1: Find the index of @
//   let atIndex = email.indexOf("@");

//   // Step 2: Find the index of the last dot
//   let dotIndex = email.lastIndexOf(".");

//   // Step 3: Calculate email length
//   let emailLength = email.length;

//   // Step 4: Validate email
//   if (
//     atIndex >= 3 &&
//     dotIndex - atIndex >= 4 &&
//     emailLength - dotIndex - 1 >= 2 &&
//     emailLength - dotIndex - 1 <= 3 &&
//     atIndex !== -1 &&
//     dotIndex > atIndex
//   ) {
//     result = "Welcome " + email + " to our site";
//   } else {
//     result = "invalid email";
//   }
//   return result;
// }

/**-------Q.15 
Problem statement
Write a program that checks whether a given year is a leap year. The program should follow specific rules to determine if a year is a leap year and store the result as a boolean value (true or false) in a variable named answer. 

Check the following conditions to check if a given year is a leap year or not:
Condition 1: If a year is divisible by 4, it is a leap year.
Condition 2: If a year is divisible by 100, it is not a leap year.
Condition 3: If a year is divisible by 400, it is a leap year even though it is divisible by 100.
-------*/
// let leapYear = (year) => {
// let answer;

// if(year % 400 === 0){
//  answer = true;
// }else if(year % 100 === 0){
//   answer = false
// }else if(year % 4 === 0){
//   answer = true
// }else{
//   answer = false
// }
// return answer
// }

// console.log(leapYear(2013));
// console.log(leapYear(2004));
// console.log(leapYear(2100));

/**------Q.16 
Problem statement
Create a program that takes a customer's coffee order as input, converts the input to lowercase, and uses a switch statement to handle different coffee types. The program should calculate the price based on the selected coffee type and store the result in a variable named " answer."

The coffee types and their prices are as follows:
Regular: $2.50
Latte: $3.50
Cappuccino: $4.00
Espresso: $2.50
--------*/
// let coffeeMatchine = (coffeeType) => {
// let answer;
// coffeeType = coffeeType.toLowerCase();

// switch(coffeeType){
//   case "regular" : answer = '$2.50';
//   break;

//   case 'latte' : answer = '$3.50';
//   break;

//   case 'cappuccino' : answer = '$4.00';
//   break;

//   case 'espresso' : answer = '$2.50';
//   break;

//   default : answer = "Invalid coffee type";
// }
// return answer;
// }
// console.log(coffeeMatchine("ESPRESSO"));

/**-----Q17.  
what will be the output ? 
--------*/
// let flag;

// let num = flag ? 100 : 200;
// console.log(num); // 200

/**------Q18.
 You are tasked with creating a program that calculates the sum of even numbers up to a given limit. Write a JavaScript function using a for loop that takes a positive integer as input and returns the sum of all even numbers from 1 up to that integer. 
--------*/
// let sumOfEvenNumber = (num) => {
//   let result = 0;
//   for(let i = 1; i <= num; i++){
//     if(i % 2 == 0){
//       result += i
//     }
//   }
//   return result;
// }
// console.log(sumOfEvenNumber(6));

/**------Q19.
 You are building a program to calculate the factorial of a given positive integer. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. Write a JavaScript function using a for loop that takes a positive integer as input and returns its factorial.
---------*/
// let findFactorial = (num) => {
//   let result = 1;
//   for(let i = 1; i <= num; i++){
//     result *= i;
//   }
//   return result
// }
// console.log(findFactorial(5));

/**-----Q.20 
Print even or odd
--------*/
// Case 1:
// let findEven = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// };

// findEven(50);

// case 2:
// let findEven = (num) => {
//   let result = [];
//   for(let i = 1; i <= num; i++){
//     if(i % 2 === 0){
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(findEven(10));

/**-----Q.21 
prime or not
----------*/

// let checkPrime = (num) => {
//   let isPrime = true;
//   if(num <= 1){
//     isPrime = false
//   }else{
//     for(let i = 2; i < num; i++){
//       if(num % i === 0){
//         isPrime = false;
//         break;
//       }
//     }
//   }
//   if(isPrime){
//     return "Prime Number"
//   }else{
//     return "Not Prime Number"
//   }
// }

// console.log(checkPrime(10));

/**-----Q.22 Composite Number -------*/
let checkComposite = (num) => {
  let isComposite = false;
  if(num <= 1){
    return false;
  }else{
   for(let i = 2; i < num; i++){
    if(num % i === 0){
      return true
    }
   }
  }
  return isComposite;
}

console.log(checkComposite(4));

console.log(checkComposite(7));

console.log(checkComposite(9));

console.log(checkComposite(1));