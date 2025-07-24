// Example of Object...............

// const student = {
//   studentmarks(){
//     console.log('Stedent Passing Marks 50%')
//   }
// }
// const mohan = {
//   marks: 60,
//   studentmarks(){
//    console.log('Student Passing Marks 40%')
//   }
// }
// mohan.__proto__ = student;

// Example of Class............................

// class BtechStudents{
//   shivam(){
//     let studentDetails = {
//       studentName: 'Shivam Kumar',
//       enrollmentNo: '2210544432299',
//       cource: 'B-tech',
//       branch: 'cse',
//       session: '2022-26'
//     }
//     return studentDetails
    
//   }
//   shubham(){
//     let studentDetails = {
//       studentName: 'Shubham Kumar',
//       enrollmentNo: '2210544432299',
//       cource: 'B-tech',
//       branch: 'cse',
//       session: '2022-26'
//     }
//     return studentDetails
//   } 
//   Raman(){
//     let studentDetails = {
//       studentName: 'Raman Kumar',
//       enrollmentNo: '2210544432299',
//       cource: 'B-tech',
//       branch: 'cse',
//       session: '2022-26'
//     }
//     return studentDetails
//   } 
// }
// class BcaStudents{
//   shubham(){
//     let studentDetails = {
//       studentName: 'Shubham Kumar',
//       enrollmentNo: '2210544432299',
//       cource: 'BCA',
//       session: '2022-26'
//     }
//     return studentDetails
    
//   }
//   vishal(){
//     let studentDetails = {
//       studentName: 'Vishal Kumar',
//       enrollmentNo: '2210544432299',
//       cource: 'BCA',
//       session: '2022-26'
//     }
//     return studentDetails
//   } 
//   Pritam(){
//     let studentDetails = {
//       studentName: 'Pritam Kumar',
//       enrollmentNo: '2210544432299',
//       cource: 'BCA',
//       session: '2022-26'
//     }
//     return studentDetails
//   } 
// }

// let Btech = new BtechStudents()
// let Bca = new BcaStudents()

// Example of Construction..................

// class BtechStudents{
//   constructor(studentName, enrollmentNo, cource, session){
//     this.studentName = studentName,
//     this.enrollmentNo = enrollmentNo,
//     this.cource = cource,
//     this.session = session
//   }
// }
// let Btech = new BtechStudents('shivam', 22105000008221, 'Btech', 2022-26)

// Example of Inheritance...............

// class student{
//  studet(){
//    let student = {
//     studentName: 'Pritam Kumar',
//     enrollmentNo: '2210544432299',
//     cource: 'BCA',
//     session: '2022-26'
//    }
//    return student
//  }

//  studentParents(){
//   let parents = {
//     parentName: 'Mohan Kumar',
//     contact: '9942712724'
//   }
//   return parents
//  }
// }

// class studentDetails extends student{
//   studentMarks(){
//     let marks = {
//       hindi: '70',
//       english: '60',
//       maths: '66'
//     }
//     return marks
//   }
// }

// let shivam = new studentDetails()

// 🧾 Basic Object Questions...................

// Q1 Create an object student with properties name, age, and marks. Display all keys and values using a loop.
// const student =  {
//   name: 'Shivam Kumar',
//   age: 22,
//   marks: 70
// }
// for(let keys in student){
//   console.log(keys, student[keys])
// }


// Q2. Write a Object to count the number of properties.
// const student = {
//   name: 'Shvam Kumar',
//   age: 21,
//   marks: 88
// }
// console.log(Object.keys(student).length)

// Q3. Write a function to count the number of properties in an object.
// const student = {
//   name: 'Shivam Kumar',
//   age: 21,
//   marks: 77
// }
// const numOfProperties = (obj)=>{
//  return Object.keys(obj).length
// }
// console.log(numOfProperties(student))

// Q4. Create a function to merge two objects.
// const student1 = {
//   name: 'Shivam Kumar',
// }
// const student2 = {
//   age: 24,
//   marks: 78
// }
// const mergeNumber = (student1, student2)=>{
//   return {...student1, ...student2}
// }
// console.log(mergeNumber(student1, student2))

// Q5. Create a function to merge three objects and Write a function to count the number of properties in an object.
// const studentDetails = {
//   name: 'Rahul Kumar',
//   enrollNo: 22109000001854,
//   cource: 'B-tech',
//   branch: 'CSE',
//   session: '2022-2026'
// }

// const studentParentsDetails = {
//   fatherName: 'Ramlal Singh',
//   phoneNumber: 99712234512
// }

// const studentMarks = {
//   PPS: 65,
//   DM: 66,
//   OOPs: 65
// }
// const meargeDetaile = (studentDetails, studentParentsDetails, studentMarks,)=>{
//   return  {...studentDetails, ...studentParentsDetails, ...studentMarks}
// }
// const mergeDetailsResult = (meargeDetaile(studentDetails, studentParentsDetails, studentMarks))
// console.log(mergeDetailsResult)

// const countProrerties = (obj) =>{
//   return Object.keys(obj).length
// }
// const countProrertiesResult = (countProrerties(mergeDetailsResult))
// console.log(countProrertiesResult)

// Q6. Write a program to find  highest value in an object like {a: 10, b: 20, c: 5}

// const numbers = {
//   a: 10,
//   b: 5,
//   c: 20
// }
// const findHighestVal = (obj)=>{
//  let highestVal = -Infinity
//  for(let keys in obj){
//   if(obj[keys] > highestVal){
//     highestVal = obj[keys]
//   }
//  }
//  return highestVal
// }
// console.log(findHighestVal(numbers))

// Q7. Write a program to find the property with the highest value in an object like {a: 10, b: 20, c: 5}

// const numbers = {
//   a: 33,
//   b: 43,
//   c: 12,
//   d: 32
// }

// const findHighestValue = (obj)=>{
//   let highestVal = -Infinity
//   let highestProp = null
//  for(let keys in obj){
//    if(obj[keys] > highestVal){
//     highestVal = obj[keys]
//     highestProp = keys
//    }
//  }
//  return {highestVal, highestProp}
// }

// console.log(findHighestValue(numbers))

// Q7. Write a program to find the property with the highest and lowest value in an object like {a: 10, b: 20, c: 5}

// const numbers = {
//   a: 45,
//   b: 104,
//   c: 43,
//   d: 22,
//   e: 12
// }

// const findHighAndLowProperties = (obj)=>{
//  let highestValue = -Infinity
//  let highestKey = null
//  let lowestValue = Infinity
//  let lowestKey = null

//  for(let keys in obj){
//   if(obj[keys] > highestValue){
//     highestValue = obj[keys]
//     highestKey = keys
//   }else if(obj[keys] < lowestValue){
//     lowestValue = obj[keys]
//     lowestKey = keys
//   }
//  }
//  return{highestValue, highestKey, lowestValue, lowestKey}
// }

// const result = (findHighAndLowProperties(numbers))

// console.log('Main object data is: ', numbers)
// console.log(`Highest Value is: ${result.highestValue} & Highest Key is: ${result.highestKey}`)
// console.log(`Lowest Value is: ${result.lowestValue} & Lowest Key is: ${result.lowestKey}`)


