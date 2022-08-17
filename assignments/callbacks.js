// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const e = require("express");

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function customForEach(arr, cb){
  for(let i=0; i<arr.length; i++){
   cb(arr[i])
  }

}
customForEach(items, callback)

function callback(anything){
  console.log(anything)
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
   cb(arr.length);
}
getLength(items,callback)




function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
last(items, (lastItem) => {
  console.log(lastItem)
})






function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let res = x+y;
  return cb(res);
}
sumNums(2,4, function (result){
  console.log(result)
})

// console.log(sumNums(2,5,callback)) // 7



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let res = x*y;
  return cb(res);
}
// console.log(multiplyNums(2,5,callback)) // 10



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item)) return cb(true)
  else return cb(false)
}
// console.log(contains('Gum', items, callback)) //"Gum" return true || 'gum return false'


/* STRETCH PROBLEM */

const repeat = [1,2,3,4,5,5,4,3,2]


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = []
  for(let i=0; i<array.length; i++){
    if(!newArr.includes(array[i])) newArr.push(array[i])
  }
  return cb(newArr)
}
// console.log(removeDuplicates(repeat, callback)) // [1,2,3,4,5]
