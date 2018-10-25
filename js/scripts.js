function findQuotientRemainder(inputUserNumber){
  var I = 1;
  var V = 5;
  var X = 10;
  var romanOut = [];
  if (inputUserNumber > I && inputUserNumber < V){
    var quotient = inputUserNumber / I;
    var remainder = inputUserNumber % I;
    console.log(quotient, remainder);
  }
  // if (quotient === V - I){
  //
  // }
  romanOutArray = generateFirstHalfWithQuotient(quotient, remainder);
  var romanOutString = romanOutArray.join("")
  return romanOutString;
}

function generateFirstHalfWithQuotient(q, r){
var firstHalfRoman = [];
var firstHalfRomanOut = [];
for (var i = 0; i < q; i++){
firstHalfRoman.push("I");
}
if(r === 0){
  return firstHalfRoman;
  console.log(firstHalfRoman);
} else {
  firstHalfRoman.concat(r);
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
