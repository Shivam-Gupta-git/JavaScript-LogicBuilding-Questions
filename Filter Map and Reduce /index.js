// Filter Questions...................

// Q1. Given an array of numbers, return a new array containing only the even numbers.
  // const numbers = (num) => {
  // let newNumber = num.filter((item) => {
  //   if(item % 2 === 0){
  //     return item
  //   }
  // })
  //  console.log("new number",newNumber)
  // } 
  // numbers([32, 54, 17, 98, 445, 332, 12, 43, 16])

//Q2. Remove all falsy values (false, 0, "", null, undefined, NaN) from an array.
// const arr = (value) => {
//   const newItem = value.filter(item => item)
//   console.log(newItem)
// }
// arr([false, 0, "", null, undefined, NaN, 'Shivam', 22])

// Q3. Given an array of user objects with {name, age}, return users older than 18

// const user = [
//   {
//    id: 1,  
//    name: 'shivam',
//    age: '22'
//   },
//   {
//     id: 2,
//     name: 'shubhm',
//     age: '21'
//   },
//   {
//     id: 3,
//     name: 'mohan',
//     age: '17'
//   },
//   {
//     id: 4,
//     name: 'rohan',
//     age: '16'
//   },
// ]
// const matchUser = []

// const userName = user.filter(item => item.id === 3)
// matchUser.push(...userName)

// console.log(matchUser)

// Q4. Given a list of products {name, inStock}, return the names of out-of-stock products
// const products = [
//   { name: "Laptop", inStock: true },
//   { name: "Mouse", inStock: false },
//   { name: "Keyboard", inStock: true },
//   { name: "Monitor", inStock: false }
// ];

// const inStockProduct = []
// const OutOfStoct = []

// products.filter(item => item.inStock === false ? OutOfStoct.push(item) : inStockProduct.push(item))
// console.log('In Stock Product', inStockProduct)
// console.log('Out of Stocks Product', OutOfStoct)


// Map Questions......................

// Q5. Given an array of numbers, return an array of their squares.
// const numbers = (num)=> {
// const numbers = num.map(items => items * items)
// return numbers
// }
// let result = numbers([2, 4, 3, 6, 5, 8])
// console.log(result)

// Q6. Given an array of user objects {id, username}, return an array of usernames.
// const user = [
//   {id: 1, userName: 'Mohan'},
//   {id: 2, userName: 'Sohan'},
//   {id: 3, userName: 'Sita'},
//   {id: 4, userName: 'Geeta'},
//   {id: 5, userName: 'Ram'}
// ]
// const userName = user.map(item => item.userName )
// console.log(userName)

// Q7. Given an array of lowercase strings, return a new array where the first letter is capitalized.
// const latters = (words)=>{
// const toLowerCaseItem = words.map(items => items.toLowerCase())
// const newWords = toLowerCaseItem.map(items => items.charAt(0).toUpperCase() + items.slice(1))
// return newWords
// }
// const result = latters(['mohan', 'sohAn', 'geeta', 'Chandan'])
// console.log(result)

// Q8. Given an array of ISO date strings, return an array of formatted dates like DD-MM-YYYY.

// Reduce Questions.....................

// Q9. Return the total sum of all numbers in an array.
// const numbers = (num) => {
// const sumNumber = num.reduce((pre, cur) => {
//    return pre + cur
// })
// return sumNumber
// }
// const result = numbers([2, 5, 3, 6, 8])
// console.log(result)

// Q10. Count how many times each element occurs in an array of strings.
// const fruits = (fru)=>{
// const fruitsOccure = fru.reduce((pre, curr) => {
//    pre[curr] = (pre[curr] || 0) + 1
//    return pre
// }, {})
//  return(fruitsOccure)
// }
// const result = fruits(['apple', 'banana', 'orange', 'apple', 'banana', 'orange'])
// console.log(result)

// Q11. Using reduce, find the maximum number in an array.
// const numbers = (num)=>{
//  const maxNum = num.reduce((pre, curr) => {
//   return pre > curr ? pre : curr
//  })
//  console.log(maxNum)
// }
// const result = numbers([33, 11, 65, 34, 76, 56, 2, 1044])

// Q12. Given an array of objects with category, group the objects by category.
// const items = [
//   { name: 'Shirt', category: 'Clothing' },
//   { name: 'Pants', category: 'Clothing' },
//   { name: 'Phone', category: 'Electronics' },
//   { name: 'Laptop', category: 'Electronics' },
//   { name: 'Apple', category: 'Food' }
// ];

// const cateItems = items.reduce((pre, curr)=> {
//   const categoryItems = curr.category
//   if(!pre[categoryItems]){
//     pre[categoryItems] = []
//   }
//   pre[categoryItems].push(curr)
//   return pre
// }, {})
// console.log(cateItems)
//  Combined Filter + Map + Reduce Questions...................
// Q. Given an array of products {name, price, inStock}, calculate the total price of all in-stock products.
// Q. Given users with {name, age}, find the average age of all users older than 20.
// Q. From an array with duplicate values, return a new array of only unique values using reduce.
// Q. Given an array of strings, return the longest one using reduce.
// Q. Given an array of words, return the total number of vowels across all words.


