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




//-----FizzBuzz------------


for (n = 0; n <= 99; n++) {
  if ((n % 3 === 0) && (n % 5 === 0)) {
  console.log("FizzBuzz!");
  }
  else if (n % 3 === 0) {
    console.log("Fizz");
  }
  else if (n % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(n);
  }
}


///---------------------------------

//--------ChessBoard

var space = " ";
var hash = "#";
var chessString = "";
var chessBoard = function(num) {
  for (i = 0; i < num; i++) {
    if ((i + c) % 2 === 0) {
      chessString += space;
    }
    else {
      chessString += hash;
    };
  for(c = 0; c < num; c++) {
    chessString.length === num) {

      }; // close inner loop (empty!)
    chessString += "\n";
  }; //close outer for loop
  console.log(chessString);

};

chessBoard(8);



/*

__

if (i + c) equals (num * 2) then break..


    chessString += space;
    chessString += hash; 
    chessString += space;
    chessString += hash; 
    chessString += space;
    chessString += hash; 
    chessString += space;
    chessString += hash; 