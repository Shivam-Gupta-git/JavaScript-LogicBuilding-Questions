// 🔹 1. ARRAY-BASED QUESTIONS (MOST COMMON)....................................................

// 1. Find the largest / smallest element in an array...........
// Largest Number.....

// let numbers = [7, 4, 2, 6, 5, 8];
// let compNum = numbers[0];
// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] > compNum){
//     compNum = numbers[i];
//   }
// }
// console.log(compNum)

// Smallest Number.....
// let numbers = [2, 1, 5, 3, 7];
// let compNum = numbers[0];
// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] < compNum){
//     compNum = numbers[i]
//   }
// }
// console.log(compNum)

// 2.	Reverse an array.........................
// let numbers = [8, 2, 3, 4, 5, 6];
// let start = 0;
// let end = numbers.length - 1;

// while(start < end){
//  let temp = numbers[start];
//  numbers[start] = numbers[end];
//  numbers[end] = temp;

//  start++;
//  end--;
// }

// console.log(numbers)

// 3. Find the sum / average of array elements..................
// let numbers = [2, 4, 6, 1, 7];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//   sum += numbers[i]
// }

// let avg = sum / numbers.length;

// console.log("Sum of given array is: ",sum)
// console.log("Avrage of given array is: ", avg)

// 4. Count even and odd numbers............................

// let numbers = [2, 4, 1, 6, 8, 3];
// let even = 0;
// let odd = 0;
// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] % 2 == 0){
//     even ++;
//   }else{
//     odd ++
//   }
// }
// console.log("Length of even number is: ", even);
// console.log("Length of odd number is: ", odd);

// 5.	Find duplicate elements.............................
// let numbers = [1, 3, 5, 2, 1, 7, 2];
// let duplicateElement = [];
// for(let i = 0; i < numbers.length; i++){
//   for(let j = 1+i; j < numbers.length; j++){
//     if(numbers[i] == numbers[j]){
//       duplicateElement.push(numbers[i]);
//     }
//   }
// }

// console.log(duplicateElement);

// 6. Sort an array (bubble sort / selection sort)..................
// sorted array in accending order. 
// let numbers = [1, 4, 2, 6, 7, 3];
// for(let i = 0; i < numbers.length; i++){
//   for(let j = 1+i; j< numbers.length; j++){
//     if(numbers[i] > numbers[j]){
//       let temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }
// console.log("Sorted Array in Accending:",numbers)

// sorted array in descending order.
// let numbers = [1, 4, 2, 6, 7, 3];
// for(let i = 0; i < numbers.length; i++){
//   for(let j = 1+i; j< numbers.length; j++){
//     if(numbers[i] < numbers[j]){
//       let temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }
// console.log("Sorted Array in Descending Order:",numbers)

// 7.	Rotate an array by one position.............................
// let numbers = [1, 2, 3, 4, 5];
// let first = numbers[numbers.length - 1];
// for(let i = numbers.length - 1; i > 0; i--){
//   numbers[i] = numbers[i - 1];
// }
// numbers[0] = first;
// console.log(numbers)

// 8.	Merge two arrays.........................
// let num1 = [1, 2, 3, 4];
// let num2 = [5, 6, 7, 8];
// let newArray = [];

// for(let i = 0; i < num1.length; i++){
//   newArray.push(num1[i]);
// }
// for(let i = 0; i < num2.length; i ++){
//   newArray.push(num2[i]);
// }

// console.log(newArray);

// 2nd way
// let merged = num1.concat(num2);
// console.log(merged);

// 3rd way
// let merge = [...num1, ...num2];
// console.log(merge)

// 🔹 2. STRING-BASED QUESTIONS...................................................

// 1.	Reverse a string..............................
// let latter = 'abcd'
// let arr = latter.split('')
// // console.log(arr)
// let start = 0;
// let end = latter.length - 1;

// while(start < end){
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;
//   start++;
//   end--;
// }

// latter = arr.join('')
// console.log(latter)

// 2.	Check palindrome..........................
// let string = 'madam';
// let start = 0;
// let end = string.length - 1;
// let isPalindrome = true;
// while(start < end){
//   if(start[start] !== start[end]){
//     isPalindrome = false;
//     break;
//   }

//   start++;
//   end--;
// }

// console.log(isPalindrome ? 'isPalindrome' : 'is not Palindrome')

// 3.	Count vowels and consonants...........................................
// let string = 'abhsdeouxl'
// let newString = string.toUpperCase()
// let vowelElement = []
// let consonantsElement = []
// let countVowel = 0;
// let countConsonent = 0;

// for(let i = 0; i < newString.length; i++){
//   if(
//     newString[i] === 'A' ||
//     newString[i] === 'E' ||
//     newString[i] === 'I' ||
//     newString[i] === 'O' ||
//     newString[i] === 'U'
//     ){
//     vowelElement.push(newString[i])
//     countVowel++;
//   }else{
//     consonantsElement.push(newString[i])
//     countConsonent++;
//   }
// }
// vowelElement = vowelElement.join('').toLowerCase()
// consonantsElement = consonantsElement.join('').toLowerCase()

// console.log('Your String is:', string)
// console.log("Vowel Element is:",vowelElement, 'Count of Vowel is:', countVowel)
// console.log("Consonants Element is:", consonantsElement, 'Count of Consonants is:', countConsonent)

// 4.	Find frequency of characters......................................
// let string = 'hello';
// let arr = string.split('')

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] === -1) continue;
//   let count = 1;
//   for(let j = 1 + i; j < arr.length; j++){
//     if(arr[i] === arr[j]){
//       count++;
//       arr[j] = -1;
//     }
//   }
//   console.log(arr[i], '=', count)
// }

// 5.	Remove duplicate characters........................................
// let string = 'hello';
// let arr = string.split('');
// let newArr = [];
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] === -1) continue
//   for(let j = i + 1; j < arr.length; j++){
//     if(arr[i] === arr[j]){
//       arr[j] = -1;
//     }
//   }
//   newArr.push(arr[i])
// }
// string = newArr.join('')
// console.log(string)

// 6.	Find length of string without using length()..........................
// let string = 'abcdhsye';
// let count = 0;

// for (let ch of string) {
//   count++;
// }

// console.log(count);

// 🔹 3. NUMBER-BASED QUESTIONS..............................

// 1.	Check prime number...................

// let number = 25;
// isPrime = true;

// if(number <= 1){
//   isPrime = false;
// }else{
//   for(let i = 2; i <= Math.sqrt(number); i++){
//     if(number % i === 0){
//      isPrime = false;
//      break;
//     }
//   }
// }

// console.log(isPrime ? 'isPrime': 'not Prime')





