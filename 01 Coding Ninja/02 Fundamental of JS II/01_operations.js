/**----- Operations in JS ------------*/

/**------ Arithmetic: math calculations -------*/
// let a = 10;
// let b = 3;

// console.log(a + b);  // 13
// console.log(a - b);  // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.3333
// console.log(a % b); // 1
// console.log(a ** b); // 1000
// console.log(a ++); // 10
// console.log(++a); // 12


/**------- Assignment: store values ------------*/
// let a = 10;

// console.log(a += 5); // 15
// console.log(a -= 5); // 10
// console.log(a *= 5); // 50
// console.log(a /= 5); // 10
// console.log(a %= 5); // 0

/**-------- Comparison: gives true or false ---------*/
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false
// console.log(5 != 3); // true
// console.log(5 !== '3'); // true
// console.log(5 > 7); // false
// console.log(7 < 4); // false
// console.log(5 >= 5); // true

/**--------- Logical: combine conditions -------------*/
// let age = 20, hasId = true;
// console.log(age > 18 && hasId);   // true  (AND: both must be true)
// console.log(age < 18 || hasId);   // true  (OR: any one true)
// console.log(!hasId);              // false (NOT: reverses)

/**-------- String: + joins strings -------------*/
// console.log("Hello" + " " + "World"); // Hello World
// console.log(typeof("5" + 3)); //53  (string)
// console.log("5" - 3); // 2     
// console.log(typeof("5" - 3)); // (converted to number)

/**----- Ternary: short if-else ---------*/
// let age = 15;
// let student = age >= 18 ? "Adult" : "Minor";
// console.log(student); // Minor

/**---------- Others: typeof, nullish ??, optional chaining ?. -------------*/
// console.log(typeof 42);        // number
// console.log(null ?? "default"); // default
// let user = {};
// console.log(user?.address?.city); // undefined (no error)

