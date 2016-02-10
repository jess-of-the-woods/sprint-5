/*
The previous chapter introduced the standard 
function Math.min that returns its smallest 
argument. We can do that ourselves now. Write 
a function min that takes two arguments and 
returns their minimum.
*/

var min = function (a, b) {
  return Math.min(a, b);
}
console.log(min(0, 10));
console.log(min(0, -10));

//---------------------

