/**--------- Write a JavaScript program that creates a simple JavaScript program that manipulates strings using various string methods. --------------*/

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

/**--------- Write a program to calculate the area of the rectangle for the given dimension (len and wid). Store the area in the result variable. ----------*/

// let areaOfRectangle = (len, wid)=>{
// let result = len * wid;
// return result;
// }

// console.log(areaOfRectangle(5, 5));

/**----------- solve this problem -----------*/
// let x = 7;
// let y = 2;
// console.log(x ** y);

/**--------------- Now build a calculator application, and we have to implement basic arithmetic operations. Write a JavaScript program that takes two numbers as input, performs addition, subtraction, multiplication, and division, and displays the results. --------------*/

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

/**------------- Develop a program to calculate the area of a triangle. The program takes the base and height of a triangle as input and calculates the area using the appropriate arithmetic operators for multiplication and division. -----------*/

// let areaOfTriangle = (base, height) => {
//   let result;
//   result = 1/2 * base * height;
//   return result
// }

// console.log(areaOfTriangle(10, 20));

/**------------ find the output --------------*/
// let x = "2";
// let y = 5;
// let result = x * y;
// console.log(typeof(result)); // Number

// console.log(result === 10); // true

/**----- Create a simple online shopping discount calculator. The program should take the input for the original price of a product and the discount percentage. It should then calculate and display the final discounted price. -------*/
// let shoppingDiscountCalculator = (original_price, discount_percentage) => {
//   let price = parseFloat(original_price);
//   let discount = parseFloat(discount_percentage);

//   let discount_Amount = (price * discount) / 100;
//   let answer;
  
//   answer = price - discount_Amount;
//   return answer;

// }
// console.log(shoppingDiscountCalculator("50.75", "15.5"));

/**----- calculate the fahrenheit and display ishot or not */
// let temperatureInCelcius = (celsius)=> {
// let fahrenheit;
// fahrenheit = (celsius * 9/5) + 32;
// let ishot;
// ishot = fahrenheit > 86;
// return ishot;
// }

// console.log(temperatureInCelcius(35));

/**----- Write a JavaScript function named checkEligibility that takes an integer input age and checks if the user's age meets the eligibility criteria. The function should return a string indicating whether access is "granted" or "denied" based on the following conditions -----*/
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

/**------ You are developing an online shopping website, and you want to implement a discount system based on the total purchase amount. Write a JavaScript program using if statements and operators that calculate and display the total cost after applying a discount. The discount rules are as follows: ------*/
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

/**---- find the discount -------*/
// let dis = (amount) => {
//   let result;
//   let disAmount;
//   disAmount = amount * (10/100);
//   result = amount - disAmount;
//   return result
// }

/**----- You are required to implement a grading system for a school based on the marks obtained by students in a test. The goal is to write a JavaScript program that determines the grade of a student using conditional statements. -----*/

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

/**----- Email Validation Solution ----------*/
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


/**---- You have already completed the email validation program using "||" operator. Now modify the code and rewrite the conditions to validate the email using the "&&" operator.

Additionally, include one more condition that: Email should have at least 3 characters before “@.”

If the email is valid, store the value of the email in the result variable with a welcome message. If the email is invalid, store the string "invalid email" in the result variable. ------*/
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
