function findQuotientRemainder(inputUserNumber){
  var I = 1;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;
  var romanNumeralsArray = [I, V, X, L, C, D, M];
  var romanOutArray = [];
  if (inputUserNumber > I && inputUserNumber < V-I){
    var quotient = inputUserNumber / I;
    var remainder = inputUserNumber % I;
    var qToPush = "I";
    console.log(quotient, remainder);
  } else if (inputUserNumber >= V && inputUserNumber < X) {
    quotient = parseInt(inputUserNumber / V);
    remainder = inputUserNumber % V;
    console.log(quotient, remainder);
    qToPush = "V";
    rToPush = "I";
  }

  if (inputUserNumber === V - I){
    romanOutArray.push("I", "V");
  }
  else if (inputUserNumber === X - I){
    romanOutArray.push("I", "X");
  } else {
    romanOutArray = generateFirstHalfWithQuotient(quotient, remainder, qToPush, rToPush);
  }

  var romanOutString = romanOutArray.join("")
  return romanOutString;
}



function generateFirstHalfWithQuotient(q, r, qPush, rPush){
var firstHalfRoman = [];
var firstHalfRomanOut = [];
console.log(q, r);
for (var i = 0; i < q; i++){
firstHalfRoman.push(qPush);
}
if(r === 0){
  return firstHalfRoman;
  console.log(firstHalfRoman);
} else {
  for (var i = 0; i < r; i++){
  firstHalfRoman.push(rPush);
  }
  return firstHalfRoman;
}
}


$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    //user-input
    var inputDecimalNumber = parseInt($("#inputNumb").val());
    console.log(inputDecimalNumber);
    var romanLessThanFive = findQuotientRemainder(inputDecimalNumber);
    console.log(romanLessThanFive);
  });
});
