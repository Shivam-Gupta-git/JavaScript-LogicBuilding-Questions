// Named Function................. 
// function sum (){
//   let a = 10;
//   let b = 20;
//   let sum = a + b;
//   return sum;
// }

// console.log(sum())

// Arrow Function.................
// let multi = ()=> {
//   let a = 10;
//   let b = 20;
//   let multi = a * b;
//   return multi;
// }
// console.log(multi())

// Example of array..........................
// let name1 = ["mohan", "sohan","Ram"]
// console.log(name1)
// for(let i = 0; i < name1.length; i++){
//   console.log(i)
// }
// name1.push('Shubham')
// console.log(name1)

// How do you add an element to an array? Example......................
// let name1 = ["ram", "mohan", "sohan"];
// console.log(name1)

// 1. push
// name1.push('shubham')
// console.log(name1)

// 2. unshift
// name1.unshift('shubham')
// console.log(name1)

// 3. splice
// name1.splice(2, 0, "shubham");
// console.log(name1);

// Example of an object....................
// let student = {
//   name : 'ram',
//   age: 21,
//   cource: 'BCA'
// }
// console.log(student)
// console.log(student.name)

// Access a property of an object................... 
// let student = {
//   name : 'ram',
//   age: 21,
//   cource: 'BCA'
// }

// 1. dot notation.
// console.log(student.name);
// 2. bracket notation
// console.log(student["age"])

// Comparision between '==' or '==='...............................
// let number1 = 6
// console.log(typeof(number1))

// let number2 = '6'
// console.log(typeof(number2))

// '=='
// if(number1 == number2){
//   console.log('equal')
// }

// '==='
// if(number1 === number2){
//   console.log('equal')
// }else{
//   console.log('not equal')
// }

//Example of Callback function..........................

// let message = (sum) => {
//   console.log("Sum of two number is: ", sum)
// }

// let sum = (a, b, callback) => {
//   let sum = a + b;
//   callback(sum)
// }
// sum(4, 5, message)

// anoter example...
// let message = () => {
//   console.log("work id done. Thank You!")
// }

// let sum = (a, b, callback) => {
//  let sum = a + b;
//  console.log("Sum of two number is: ",sum)
//  setTimeout(()=> {
//   callback()
//  },1000)
// }

// sum(3, 7, message)

//  How do you loop through an array in JavaScript?.................................
// let name1 = ["ram", "mohan", "sohan", "ajit"]
// console.log(name1);

// 1. for loop.
// for(let i = 0; i < name1.length; i++){
//   console.log(name1[i]);
// }

// 2. for-of loop.
// for(let name of name1){
//   console.log(name);
// }

// 3. for-each.
// name1.forEach(name => console.log(name));

// 4. map mehod.
// let newList = name1.map(item => item.toUpperCase())
// console.log(newList);

// Example of callback function..............................
// let great = function(){
//   console.log('hello...')
// }

// let sum = (a, b, callback) => {
//  let sum = a + b;
//  console.log(sum)
//  setTimeout(()=> {
//   callback()
//  },2000)
// }

// sum(3, 6, great)

//Example of javascript Promise....................................

// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if(success){
//     resolve("Data resolve")
//   }else{
//     reject("Data reject")
//   }
// })

// myPromise.then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)
// })

// Example of javascript clouser.......................
// let counter = ()=> {
//   let count = 0;
//   return function(){
//     count++;
//     console.log(count)
//   }
// }

// let add = counter()
// add() 
// add() 
// add() 

// Example of try catch.................................
// try {
//   let result = JSON.parse('{name:"Shivam"}'); // invalid JSON
//   console.log(result);
// } catch (error) {
//   console.log("Error occurred:", error.message);
// } finally {
//   console.log("Done");
// }

// Example of Synchronous Programming ...................................................
// let Synchronous = (a, b) => {
//  let sum = a + b;
//   return sum
// }
// let result =  Synchronous(3, 6)
// console.log(result)

// Example of Asynchronous Programming...................................................

// console.log('first')
// let sum = (a, b, callback) => {
//   let result = a + b;
//   setTimeout(() => {
//     callback(result);
//   }, 2000);
// }
// sum(3, 6, (data) => {
//   console.log("second", data);
// });

// console.log('third')

// Example of bind() method................................. 
// let user = {
//   name: "Shivam"
// };

// function greet() {
//   console.log("Hello", this.name);
// }

// let boundGreet = greet.bind(user);
// boundGreet(); 

//Example of Prototype.........................................
// function User(name){
//  this.name = name;
// }

// User.prototype.sayHello1 = function(){
//   console.log('Hello My name is ', this.name)
// }

// let name1 = new User('Rohan')
// let name2 = new User('Shubham')

// name1.sayHello1()
// name2.sayHello1()

// Example of map() method.................................................

// let numbers = [2, 5, 1, 6, 7]
// let newNumbers = numbers.map((num) => num + 1)
// console.log('Original Number',numbers)
// console.log('maping numbers',newNumbers)

// Example of filter() method......................................

// let number = [1, 4, 5, 2, 3, 7];
// let newNumber = number.filter((num) => num > 4)
// console.log(newNumber)

// Example of reduce() method......................................
// let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); 

// Example of Private variable............................
// let counter = () => {
//   let count = 0
//   return {
//     increment(){
//       count++;
//       return count;
//     },
//     decrement(){
//       count--;
//       return count
//     }
//   }
// }

// let counterFun = counter();
// console.log(counterFun.increment())
// console.log(counterFun.increment())

// console.log(counterFun.decrement())

// Example of typeOf............................................
// let number1 = 33;
// console.log(typeof(number1));

// let name1 = 'Roham';
// console.log(typeof(name1));

// let logic = true;
// console.log(typeof(logic));

// let number2 
// console.log(typeof(number2))

// let number3 = {}
// console.log(typeof(number3))

// let fun = () => {};
// console.log(typeof(fun))

// Example of pop() method............................................

// let numbers = [1, 2, 4, 6, 3];
// let remove1 = numbers.pop()
// console.log(remove1) // 3
// console.log(numbers) // [ 1, 2, 4, 6 ]

// Example of shift() method..................................
// let numbers = [1, 3, 5, 2, 6];
// let newnumbers = numbers.shift();
// console.log(newnumbers);
// console.log(numbers)

// Example of splice() method............................................
// let numbers = [1, 4, 2, 6, 4, 8]
// let newNumbers = numbers.splice(1, 1)
// console.log(newNumbers);
// console.log(numbers);

// Example of a Higher Order Function....................................

// let sum = (a, b, callback) => { // higher Order Function
//   let result = a + b;
//   callback(result)
// }

// function showResult(result){ // regular function
//   console.log(result)
// }
// sum(2, 5, showResult);

// Another Example of Higher Order Function...
// let student = (names, callback) => { // Higher Order Function
//   let newName = [];
//   for(let i = 0; i < names.length; i++){
//    let result =  names[i] + 'Kumar'
//    newName.push(result)
//   }
//   callback(newName)
// }

// function showResult (result){ // regular Function
//  console.log(result)
// }

// let names = ['rohan', 'shubham', 'rahul']
// student(names, showResult)


// Spread Operator with Arrays.................................
// let arr1 = [2, 4];
// let arr2 = [5, 7];
// let newArr = [...arr1, ...arr2];
// console.log(newArr)

// let arr1 = [1, 3];
// let newArr = [...arr1]
// console.log(newArr) // Copy Array

// 2️⃣ Spread Operator with Objects....
// const student1 = {
//   name: 'Rohan',
//   age: 21
// };

// const student2 = {
//   name: 'Mohan',
//   age: 23
// };

// const students = [
//   { ...student1 },
//   { ...student2 }
// ];

// console.log(students);

// create an object from a class.....................................
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getDetails() {
//     return `${this.name} is ${this.age} years old`;
//   }
// }

// // Creating objects from the class
// const student1 = new Student("Rohan", 21);
// const student2 = new Student("Mohan", 23);

// console.log(student1.getDetails());
// console.log(student2.getDetails());

// Example of call() and apply() method...............................
// function greet(city, country) {
//   console.log(
//     `Hello, I am ${this.name} from ${city}, ${country}`
//   );
// }

// const user = { name: "Shivam" };

// // Using call()
// greet.call(user, "Delhi", "India");

// // Using apply()
// greet.apply(user, ["Delhi", "India"]);

// Example of Prototype chain.........................................
// function User(name){
//  this.name = name;
// }

// User.prototype.sayHi = function(){
//   console.log(`Hi, I m ${this.name}`)
// }

// const User1 = new User('Shivam');
// User1.sayHi();

// Example inheritance.............................
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// class Student extends User {
//   constructor(name, grade) {
//     super(name); // calls User constructor
//     this.grade = grade;
//   }

//   study() {
//     console.log("Studying...");
//   }
// }

// const S1 = new Student("Raman", "A");
// S1.sayHello();
// S1.study();

// Example of garbage collection.............................
// function studentName(){
//   let student = 'Mohan'
//   return student
// }

// let user1 = studentName()
// console.log(user1)
// let user2 = null
// console.log(user2)

// Example of shallow copy................................
// let student1 = {
//   name: "Riya",
//   address: {
//     city: "Pune"
//   }
// };

// let student2 = { ...student1 }; 

// student2.address.city = "Mumbai";

// console.log(student1.address.city); // Mumbai
// console.log(student2.address.city); // Mumbai

// Example of deep copy.............................................
// let student1 = {
//   name: 'Raushan Raj',
//   age: 23,
//   address: {
//     city: 'Patna'
//   }
// }

// let deepCopy = JSON.parse(JSON.stringify(student1));

// student1.name = 'Shubham Gupta'
// console.log(student1); // Shubham Gupta
// console.log(deepCopy); // Raushan Raj

// Example of setTimeOut Function.................................
// console.log('start');
// setTimeout(()=> {
//   console.log("task is completed.....")
// },2000)
// console.log('end')

// Example of Memory Leak with Closure.............................
// function createBigNumber (){
//   let calculation = new Array(100000).fill('data');
//   return function(){
//     console.log(calculation[0])
//   }
// }

// let leak = createBigNumber();
// leak()