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

/**-----  */
let temperatureInCelcius = (celsius)=> {
let fahrenheit;
fahrenheit = (celsius * 9/5) + 32;
let ishot;
ishot = fahrenheit > 86;
return ishot;
}

console.log(temperatureInCelcius(35));