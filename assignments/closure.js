// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function pizzaMaker(food) {
  let order = `I'd like a pizza with `
  function oven() {
    return order + food
  }
  return oven()
}
console.log(pizzaMaker('pineapple'))


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 1
  function newCounter(number) {
    if(number > 10) return count += 1
  }
  return newCounter
};
let c1 = counter()
console.log(c1(8))
console.log(c1(11))


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
  return {
    increment: function(){
      return count += 1;
    } ,
    decrement: function(){
      return count -= 1;
    }
  }
};

let c2 = counterFactory()
console.log(c2.increment())
console.log(c2.decrement())
let c3 = counterFactory()
console.log(c3.increment())
console.log(c3.decrement())
