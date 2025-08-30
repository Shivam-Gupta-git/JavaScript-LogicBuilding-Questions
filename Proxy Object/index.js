// In JavaScript, a Proxy object is a special wrapper around another object (called the target) that allows you to intercept and customize operations on that object, such as getting/setting properties, function calls, or even in checks.

//  Common Proxy Traps.....................
// Some useful traps you can define in the handler:
// 	•	get(target, prop, receiver) → intercept property read
// 	•	set(target, prop, value, receiver) → intercept property write
// 	•	has(target, prop) → intercept prop in object
// 	•	deleteProperty(target, prop) → intercept delete object[prop]
// 	•	apply(target, thisArg, args) → intercept function calls
// 	•	construct(target, args) → intercept new calls

//  Real-life Uses of Proxy...........................
// Validation → ensure only valid values are set.
// Logging / Debugging → log every access/change.
// Default values → return fallback when property not found.
// Read-only views → prevent modification.
// Virtualization → create objects dynamically (e.g., database rows, API responses).
// Reactive frameworks → Vue.js 3 uses Proxy for its reactivity system.


// // Example1 ........................
// let studentDetails = {
//   firstName: 'shivam',
//   lastName: 'Gupta',
//   rollNo: "A123",
//   course: "Computer Science",
//   age: 21,
// }

// const proxyStudentDetails = new Proxy(studentDetails, {
//   get(target, property){
//     if(property in target){
//       return target[property]
//     }else{
//       return false
//     }
//   },
//   set(target, property, value){
//     if((!property in target)) throw new Error(`${property} does not existing`)
//     switch(property){
//       case 'firstName' : 
//       case 'lastName':
//       case 'rollNo':
//       case 'cource':  
//         if (typeof value !== 'string') throw new Error(`${property} must be string`)
//       break
//       case 'age':
//         if(typeof value !== 'number' || typeof value !== 'string') throw new Error(`${property} must be number or string`)
//         if(value <= 0 || value > 100) throw new Error(`${property} must be greater than zero or less than 101`)  
//     }
//   target[property] = value
//   }
// })

// proxyStudentDetails.age = 101
// console.log(proxyStudentDetails)

// Example 2.
// const user = { name: "Shivam", age: 22 };

// const proxyUser = new Proxy(user, {
//   get(target, prop) {
//     console.log(`Getting property: ${prop}`);
//     return prop in target ? target[prop] : "Not Found";
//   },
//   set(target, prop, value) {
//     console.log(`Setting ${prop} = ${value}`);
//     if (prop === "age" && value < 0) {
//       throw new Error("Age cannot be negative!");
//     }
//     target[prop] = value;
//     return true; 
//   }
// });

// console.log(proxyUser.name); 
// console.log(proxyUser.gender); 
// proxyUser.age = 25;  

// Example

let person = {}

let proxyPerson = new Proxy(person, {
  get(target, property){
    return property in target ? target[property] : "property not found"
  },
  set(target, property, value){
    if(property === "age"){
      if(typeof value !== 'number' || value <= 0){
        throw new Error("age must be greater than 0")
      }
    }
    target[property] = value;
    return true
  }
})

proxyPerson.age = 20;
console.log("age is "+proxyPerson.age)

