let myArray = [2, 4, 6, 1];
let myset = new Set(myArray);
// console.log(myset);

myset.add(5);
myset.add(5)   // duplicate value will be not contain.
console.log(myset)

myset.delete(5);
console.log(myset)

let obj1 = {name: "Rohan Mishra"};
myset.add(obj1);
console.log(myset);

console.log(myset.has(11))  // has method is used to chack the value id present or not.

myset.forEach((val) => {
  console.log(val);
})