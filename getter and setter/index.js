// Getters and setters are special methods that allow you to control access and modification to an object’s properties.

// Exapmle of getter and setter method
// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name.toUpperCase();
//   }

//   set name(value) {
//     if (value.length < 3) {
//       console.log("Name is too short!");
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User('shivam')
// console.log(user.name)

// Q1. Create an class student that has firstName and lastName as properties. Add a getter fullName that returns the full name.
// class studentDetails {
//   constructor(firstName, lastName){
//    this._firstName = firstName
//    this._lastName = lastName
//   }
//   get studentName (){
//     return `${this._firstName} ${this._lastName}`
//   }
//   set studentName(value){
//     const fullName = value.split(' ')
//     this._firstName = fullName[0]
//     this._lastName = fullName[1] 
//   }
// }

// let student1 = new studentDetails('shivam', 'gupta')
// console.log(student1.studentName)

// // Q2. Create an class multi that has num as properties. Add a getter multiply that returns the value
// class multi{
//   constructor(num){
//     this._num = num
//   }
//   get multiply (){
//    return `Square of number is: ${this._num * this._num}`
//   }
//   set multiply (value){
//     const multiply = value * value
//     this._num = multiply
//   }
// }
// let numbers = new multi(4)
// console.log(numbers.multiply)

// Q3. Add a setter to the student class from above that allows setting the full name and splits it into firstName and lastName.
// class student{
//   constructor(name){
//     const splitName = name.split(' ')
//     this.firstName = splitName[0]
//     this.lastName = splitName[1]
//   }
//   get names (){
//     return `${this.firstName} ${this.lastName}`
//   }
//   set names (value){
//     const splitName = value.split(' ')
//     this.firstName = splitName[0]
//     this.lastName = splitName[1]
//   }
// }

// let studentName = new student('shivam gupta')
// console.log(studentName.firstName)

// Q4. Create a User class that stores the age of a user. Use a setter to validate that the age must be between 0 and 120. If not, throw an error.
// class User {
//   constructor(age){
//     this._age = age
//   }
//   get checkAge (){
//     return `${this._age > 0 && this._age < 120 ? `${this._age}: age is valid` : `${this._age}: age is not valid`} `
//   }
//   set checkAge (value){
//     const chechUserAge = value > 0 && value < 120 ;
//     this._age = chechUserAge
//   }
// }
// let user1Age = new User(132)
// console.log(user1Age.checkAge)

// let user2Age = new User(22)
// console.log(user2Age.checkAge) 

// Q5. Create a class BankAccount with a private _balance. Add: •	a getter balance that returns the current balance, •	a setter deposit that only allows positive values to be added.

// class BankAccount {
//   constructor(initialAmount){ 
//     initialAmount > 0 ? initialAmount : console.log(`${initialAmount}: your amount is not sufficent`)
//     this._initialAmount = initialAmount 
//   }
//   get balance (){
//     return `Current balance is: ${this._initialAmount}`
//   }
//   set deposit (value){
//     if (value > 0){
//       this._initialAmount += value
//     }else{
//       console.log('deposite amount is less than 0')
//     }
//   }
// }
// let account = new BankAccount(20)
// account.deposit = 20
// console.log(account.balance)
