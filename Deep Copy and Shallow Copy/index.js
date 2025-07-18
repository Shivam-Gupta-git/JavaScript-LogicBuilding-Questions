// Noraml way to  Copy a Object 
// let student1 = {
//   name: 'shivam',
//   age: 22
// }
// let student2 = {...student1}
// console.log(student1)
// console.log('Student2 age:',student2.age)

// A shallow copy of an object or array copies only the first level of properties .
// shallow copy Exapmles1 ...................
// let student1 = {
//   name: 'Shivam Gupta',
//   age: 20,
//   gender: 'Male',
//   isEnrolled: true,
//    address: {
//     city: 'Delhi',
//     state: 'Delhi',
//    },
//    contact: {
//     email: 'shivam@example.com',
//     phone: '+91-9876543210'
//   },
//   subjects: ['Mathematics', 'Physics', 'Computer Science'],
//   grades: {
//     Mathematics: 'A',
//     Physics: 'B+',
//     'Computer Science': 'A+'
//   } 
// }
// let student2 = {...student1}
// student2.grades.Mathematics = 'B'
// console.log('Student First', student1.grades.Mathematics)
// console.log('Student Second', student2.grades.Mathematics)


// shallow copy Exapmles2 ...................
// let student1 = {
//   name: 'Shivam',
//   age: 22,
//   Mathematics: 'A',
// }

// let student2 = {...student1}
// student2.Mathematics = 'B'
// console.log('Student First', student1.Mathematics)
// console.log('Student Second', student2.Mathematics)

// A deep copy creates a completely independent copy of an object or array, including all nested objects or arrays
// shallow copy Exapmles1 ...................
// let student1 = {
//   name: 'Shivam Gupta',
//   age: 20,
//   gender: 'Male',
//   isEnrolled: true,
//    address: {
//     city: 'Delhi',
//     state: 'Delhi',
//    },
//    contact: {
//     email: 'shivam@example.com',
//     phone: '+91-9876543210'
//   },
//   subjects: ['Mathematics', 'Physics', 'Computer Science'],
//   grades: {
//     Mathematics: 'A',
//     Physics: 'B+',
//     'Computer Science': 'A+'
//   } 
// }
// let student2 = {...student1}
// student2.grades.Mathematics = 'B'
// console.log('Student First', student1.grades.Mathematics)
// console.log('Student Second', student2.grades.Mathematics)

// let student1 = {
//   name: 'Shivam Gupta',
//   age: 20,
//   gender: 'Male',
//   isEnrolled: true,
//    address: {
//     city: 'Delhi',
//     state: 'Delhi',
//    },
//    contact: {
//     email: 'shivam@example.com',
//     phone: '+91-9876543210'
//   },
//   subjects: ['Mathematics', 'Physics', 'Computer Science'],
//   grades: {
//     Mathematics: 'A',
//     Physics: 'B+',
//     'Computer Science': 'A+'
//   } 
// }
// let student2 = JSON.parse(JSON.stringify(student1))
// student2.grades.Mathematics = 'B'
// console.log('Student First', student1.grades.Mathematics)
// console.log('Student Second', student2.grades.Mathematics)

// shallow copy Exapmles2 ...................
// let student1 = {
//   name: 'Shivam Gupta',
//   age: 20,
//   gender: 'Male',
//   isEnrolled: true,
//    address: {
//     city: 'Delhi',
//     state: 'Delhi',
//    },
//    contact: {
//     email: 'shivam@example.com',
//     phone: '+91-9876543210'
//   },
//   subjects: ['Mathematics', 'Physics', 'Computer Science'],
//   grades: {
//     Mathematics: 'A',
//     Physics: 'B+',
//     'Computer Science': 'A+'
//   } 
// }

// const makeDeepCopy = (obj) => {
//  if(typeof obj !== 'object' || obj !== null){
//   return obj
//  }
//  let checkObj = Array.isArray(obj) ? [] : {}
//  let keys = Object.keys(obj)
//  for(let i = 0; i < keys.length; i++){
//   checkObj([keys[i]]) = makeDeepCopy(obj[keys[i]])
//  }
//  return checkObj
// }
// const result = (makeDeepCopy(student1))
// let student2 = JSON.parse(JSON.stringify(student1))
// student2.grades.Mathematics = 'B'
// console.log('Student First', student1.grades.Mathematics)
// console.log('Student Second', student2.grades.Mathematics)

