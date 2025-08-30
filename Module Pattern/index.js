// The Module Pattern in JavaScript is a design pattern that lets you encapsulate (hide) private data and methods, while exposing only the parts you want to be public.

const CounterModule = (function () {
  let count = 0;
  
  function logCount() {
    console.log("Current count:", count);
  }


  return {
    increment: function () {
      count++;
      logCount();
    },
    decrement: function () {
      count--;
      logCount();
    },
    getCount: function () {
      return count;
    }
  };
})();

CounterModule.increment(); 
CounterModule.increment(); 
CounterModule.decrement(); 
console.log(CounterModule.getCount());