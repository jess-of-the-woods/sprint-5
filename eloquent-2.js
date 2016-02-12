/*all of these work. they both increment 'result' 
one time too many because of the order of the 
statements and I'm not sure how to fix this

*/
var result = "#"
for (i = 0; i < 7; i++) {
  console.log(result);
  result += "#";
}

var result = "#";
while (result.length <= 8) {
  console.log(result);
  result += "#";
}

var result = "#";
do {
  console.log(result);
  result += "#"; 
} while (result.length <= 8);
