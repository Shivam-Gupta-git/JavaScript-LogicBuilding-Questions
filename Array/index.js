//  Beginner Level..................

// Q1. Write a program to calculate the sum of all numbers in an array.

// let num = [2, 4, 6, 7, 9, 10]
// let sum = 0
// for(let i = 0; i < num.length; i++){
//   sum += num[i]
// }
// console.log(`Sum of all Numbers is ${sum}`)

// Q2. Find the largest and smallest number in a given array.

// let numbers = [22, 44, 11, 55, 32, 24, 65, 5];

// let smallestNumber = numbers[0]
// let largestNumber = numbers[0]

// for(let i = 0; i < numbers.length; i++){
//   if(smallestNumber > numbers[i]){
//     smallestNumber = numbers[i]
//   }
//   if(largestNumber < numbers[i]){
//     largestNumber = numbers[i]
//   }
// }
// console.log('Smallest Number is:',smallestNumber)
// console.log('Largest Number is:',largestNumber)

// Q3 Calculate the average value of numbers in an array.

// let numbers = [85, 97, 44, 37, 76, 60]
// let sum = 0
//   for(let i = 0; i < numbers.length; i++){
//   sum += numbers[i]
//   }
//    let avg = sum / numbers.length
//    console.log(avg)
//    console.log(avg.toFixed())

// Q4. Count the number of even and odd elements in an array.

// let numbers = [102, 93, 144, 35, 56, 107, 78, 99, 103]
// let evenNumber = 0
// let oddNumber = 0

// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] % 2 === 0){
//    evenNumber ++
//   }
//   else{
//     oddNumber++
//   }
// }
// console.log('total even number in array is:', evenNumber)
// console.log('total Odd number in array is:',oddNumber)

// Q5. Reverse the order of elements in an array without using .reverse().

// let numbers = [22, 44, 33, 25, 76, 88]
// let reverse = []

// for(let i = numbers.length - 1; i >= 0; i--){
//   reverse.push(numbers[i])
// }
// console.log(reverse)

// Q6. Count and Store the number of even and odd elements in an array.

// let numbers = [102, 93, 144, 35, 56, 107, 78, 99, 103]
// let evenNumberArr = []
// let oddNumberArr = []

// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] % 2 === 0){
//     evenNumberArr.push(numbers[i])
//   }else{
//     oddNumberArr.push(numbers[i])
//   }
// }
// console.log(`Total Number is: ${numbers} Total Number Count is: ${numbers.length}`)
// console.log(`Even Number is: ${evenNumberArr} Even Number Count is: ${evenNumberArr.length}`)
// console.log(`Odd Number is: ${oddNumberArr} Odd Number Count is: ${oddNumberArr.length}`)

//  Intermediate Level

// Q1. Write a function to remove duplicates from an array.

// let numbers = [22, 44, 33, 56, 34, 44, 24]
// let checkedDuplicateNum = []
// for(let i = 0; i <= numbers.length - 1; i++){
//  if(!checkedDuplicateNum.includes(numbers[i])){
//   checkedDuplicateNum.push(numbers[i])
//  }
// }
// console.log('Original Array is:', numbers)
// console.log('After removing duplicate array', checkedDuplicateNum)

// Q2. Find the second largest number in an array.

// let numbers = [22, 44, 34, 23, 45]
// let firstLargest = numbers[0]
// let secondLargest = numbers[0]

// for(let i = 1; i < numbers.length; i++){
//   if(numbers[i] > firstLargest){
//     firstLargest = numbers[i]
//   }
//   else if(numbers[i] > secondLargest && numbers[i] - firstLargest){
//     secondLargest = numbers[i]
//   }
// }
// console.log('Numbers of array is:', numbers)
// console.log(`first largest number is: ${firstLargest}`)
// console.log(`Second largest number is: ${secondLargest}`)

// Q3. Sort an array in ascending  order without using .sort().

// let numbers = [2, 4, 5, 3, 8, 1, 7];


// for(let i = 0; i < numbers.length; i++){
//  for(let j = 0; j < numbers.length - 1 - i; j++){
//   if(numbers[j] > numbers[j + 1]){
//     let temp = numbers[j]
//     numbers[j] = numbers[j + 1]
//     numbers[j+1] = temp
//   }
//  }
// }
// console.log(numbers)

// Q4. Sort an array in descending order without using .sort().

// let numbers = [2, 4, 5, 3, 8, 1, 7];

// for (let i = 0; i < numbers.length - 1; i++) {
//   for (let j = 0; j < numbers.length - 1 - i; j++) {
//     if (numbers[j] < numbers[j + 1]) {
     
//       let temp = numbers[j];
//       numbers[j] = numbers[j + 1];
//       numbers[j + 1] = temp;
//     }
//   }
// }
// console.log(numbers)


// Q5. For a give array with marks in students find the avrage marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60]
// let sum = 0
// for(let i = 0; i < marks.length; i++){
//   sum += marks[i]
// }
// let avg = sum / marks.length
// console.log(`avg marks of class is ${avg} `)

// Q6. for a given array with price of 5 items all items of an offer of 10% off on items. Change the array to store final price after appling offers. 

// let beforeDiscountPrice = [250, 645, 300, 900, 50]
// let afterDiscountPrice = []
// let discount = 10

// for(let i = 0; i < beforeDiscountPrice.length; i++){
//   let discountPrice  = beforeDiscountPrice[i] * (discount / 100)
//   afterDiscountPrice =  beforeDiscountPrice[i] - discountPrice
//   console.log(`Original Price ${beforeDiscountPrice[i]}`)
//   console.log(`Current Price ${afterDiscountPrice}`) 
// }

// Q7. create a array and add one new element
// let arr = ['ram', 'mohan', 'sohan', 'geeta']

// let addNewElem = arr.push('Sita')
// console.log(arr)

// Q8. create a array and remove one element 
// let arr = ['ram', 'mohan', 'sohan', 'geeta']

// let addNewElem = arr.pop()
// console.log(arr)

// Q9. create a arr and convert in string
// let number = [1, 3, 6, 4, 8]
// let converToString = number.toString()
// console.log(converToString)

// Q10. create two array and add to each other

// let Name = ['site', 'geeta', 'mohan', 'ram', 'sohan']
// let num = [1, 4, 6, 3, 7]
// let join = num.concat(Name)
// console.log(Name)
// console.log(num)
// console.log(join)
