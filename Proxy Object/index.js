// Example1 ........................
let studentDetails = {
  firstName: 'shivam',
  lastName: 'Gupta',
  rollNo: "A123",
  course: "Computer Science",
  age: 21,
}

const proxyStudentDetails = new Proxy(studentDetails, {
  get(target, property){
    if(property in target){
      return target[property]
    }else{
      return false
    }
  },
  set(target, property, value){
    if((!property in target)) throw new Error(`${property} does not existing`)
    switch(property){
      case 'firstName' : 
      case 'lastName':
      case 'rollNo':
      case 'cource':  
        if (typeof value !== 'string') throw new Error(`${property} must be string`)
      break
      case 'age':
        if(typeof value !== 'number' || typeof value !== 'string') throw new Error(`${property} must be number or string`)
        if(value <= 0 || value > 100) throw new Error(`${property} must be greater than zero or less than 101`)  
    }
  target[property] = value
  }
})

proxyStudentDetails.age = 101
console.log(proxyStudentDetails)