// Prototype = Prototype are used to provide inheritance. every javascript object have a hidden property that is call proto. prototype can be used as a reference to another object. forming a prototype chin.

// function createUser(userName, score){
//   this.userName = userName;
//   this.score = score
// }
// createUser.prototype.increment = function(){
//   this.score++
// }
// createUser.prototype.print = function(){
//   console.log(`Match ${this.userName}`)
//   console.log(`Score is ${this.score}`)
// }
// const firstMatchScore = new createUser("1st Match", 105)
// const secondMatchScore = new createUser("2nd Match", 250)

// firstMatchScore.print()

// Exapmle.
// function userDetails(name, age, state){
//   this.name = name
//   this.age = age
//   this.state = state
// }
// userDetails.prototype.print = function(){
//   console.log(`Student name is ${this.name}`)
//   console.log(`Student age is ${this.age}`)
//   console.log(`Student state is ${this.state}`)
// }
// const user1 = new userDetails("Rohan", 23, "delhi")
// const user2 = new userDetails("Sumit", 21, "bihar")

// user1.print()
// user2.print()

