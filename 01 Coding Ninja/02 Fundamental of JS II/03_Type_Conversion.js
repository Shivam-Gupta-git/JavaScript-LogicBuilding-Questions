/**------- Type Conversion ----------*/


/**------- convert to string --------*/
// console.log(String(100)); // 100 (converted to string)
// console.log(String(true)); // true (converted to string)
// console.log(String(null)); // null (converted to string)
// console.log(String(undefined)); // undefine (converted to string)

/**----- when i used tostring() -----*/
// console.log((22).toString()); // 22 (converted to string)
// console.log((null).toString()); // TypeError

/**------- convert to number --------*/
// console.log(Number("22")); // 22 (convert to number)
// console.log(Number('value')); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

/**-------- unary + operator - works on variable ---------*/
// let a = "123test"
// console.log(+a); // NaN

// let b = '123';
// console.log(+a);

/**-------- parseFloat() --------*/
// console.log(parseFloat('123.33')); // 123.33 (convert to number)
// console.log(parseInt('123')); // 123 (convert to number)

/**-------- convert to boolean ---------*/
// console.log(Boolean(0)); // false 
// console.log(Boolean(1)); // true
// console.log(Boolean(5)); // true