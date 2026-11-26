/**--- method in string --------*/

let str1 = "Javascript is wonderful!";
let str2 = "It is dynamically typed."

console.log(str1.charAt(5)); // c

console.log(str1.concat(str2)); // Javascript is wonderful!It is dynamically typed.

// Length (property hai, method nahi)
console.log(str1.length); // 24

// Case badlo
console.log(str1.toUpperCase()); // JAVASCRIPT IS WONDERFUL!
console.log(str1.toLowerCase()); // javascript is wonderful!

// Dhundho
console.log(str1.indexOf("wonderful!")); //14
console.log(str1.includes("z")); // false
console.log(str1.includes("a")); // true

// Hissa nikalo
console.log(str1.slice(0, 4)); // Java
console.log(str1.substring(6));  // ript is wonderful!

// Content badlo
console.log(str1.replace("Javascript", "JS")); // JS is wonderful!  
console.log("ha ".repeat(3)); // ha ha ha 

