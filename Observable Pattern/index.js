
class Observable {
  constructor() {
  this.observers = []; // List of observers
  }
  subscribe(observer) {
  this.observers.push(observer); // Add observer to the list
  }
  unsubscribe(observer) {
  this.observers = this.observers.filter(obs => obs !== observer); // Remove
  observer
  }
  notify(data) {
  this.observers.forEach(observer => observer.update(data)); // Notify all
  }
  }
  
  class Observer {
  update(data) {
  console.log(`Observer received data: ${data}`);
  }
  }

  // Usage
  const observable = new Observable();
  const observer1 = new Observer();
  const observer2 = new Observer();
  observable.subscribe(observer1);
  observable.subscribe(observer2);
  observable.notify("Hello Observers!");