let myArray = [["a1", "Rohan Kumar"], ["a2", "Saurav Singh"]]

let myMap = new Map(myArray);
console.log(myMap);

myMap.set("a3", "Ankit Sharma"); // set method is used to add the value in map. 
console.log(myMap);

myMap.set("a3", "Rahul Sharma");
console.log(myMap);

myMap.delete("a3");
console.log(myMap); // delete method is used to delete the value from map.

console.log(myMap.get("a1")); // get method is used to get the value from map.

myMap.forEach((val , key) => {  // forEach method is used to itrate the map.
  console.log(key, val)
}) 