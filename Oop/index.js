// -> Abstraction = hide the inner complexity, expose a simple interface.

// Example 1.
// function areaOfCircle(radius) {
//   return Math.PI * radius * radius
// }
// console.log(areaOfCircle(5))

// Example 2.
// class BankAccount {
//   #balance = 0

//   deposite(amount){
//     if(amount <= 0) throw new Error("Your bank balance is 0")
//     this.#balance += amount
//   }
//   getBalance(){
//     return this.#balance
//   }
// }

// const account = new BankAccount()
// account.deposite(500)
// console.log(account.getBalance())

// -> Object literal 
// const user = {
//   name: 'Rohan Raj',
//   age: 22,
//   state: 'Bihar',

//   getUserAccess: function(){
//     console.log(`userName: ${this.name}`)
//   }
// }

// console.log(user.getUserAccess())
// console.log(user.name)

// -> Constructor function
function User(userName, userAge,userState){
 this.userName = userName,
 this.userAge = userAge,
 this.userState = userState

 return this
}

const user1 = new User('Rohan agrwal', 22, 'up')
const user2 = new User('Mohit', 23, 'Bihar')

console.log(user1)
console.log(user2)