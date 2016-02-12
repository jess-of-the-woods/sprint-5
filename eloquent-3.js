/*Minimum--
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

/*Recursion--
We’ve seen that % (the remainder operator) can be 
used to test whether a number is even or odd 
by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same 
as N - 2.

Define a recursive function isEven corresponding 
to this description. The function should accept 
a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. 
Why? Can you think of a way to fix this?

Hint:
Your function will likely look somewhat similar 
to the inner find function in the recursive 
findSolution example in this chapter, with an 
if/else if/else chain that tests which of the 
three cases applies. The final else, corresponding 
to the third case, makes the recursive call. Each 
of the branches should contain a return statement 
or in some other way arrange for a specific value 
to be returned.

When given a negative number, the function will 
recurse again and again, passing itself an ever 
more negative number, thus getting further and 
further away from returning a result. It will 
eventually run out of stack space and abort.
*/

//recursive function from earlier in chapter..

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

//-------example above---------

console.log(findSolution(24));


var isEven = function(a) {
  var result = a % 2;
  if (result > 0) {
    return true;
  };
  isEven(a)
};

console.log(50);

console.log(75);
