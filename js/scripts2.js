function findQuotientRemainder(inputUserNumber){
  var I = 1;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;
  var romanNumeralsArray = [I, V, X, L, C, D, M];
  var inputDecimalArray = [];
  inputDecimalArray = inputUserNumber.split("");
  console.log(inputDecimalArray);
  var lenInputDecArray = inputDecimalArray.length;
  console.log(lenInputDecArray);
  var outRomanArray = [];
  var inputDecArrayZero = parseInt(inputDecimalArray[0]);

  if (inputDecArrayZero < 4) {
    for(var i = 0; i < inputDecArrayZero; i++){
      outRomanArray.push("I");
    }
  } else if (inputDecArrayZero === 4) {
      outRomanArray.push("I", "V");
      console.log(outRomanArray);
 } else if (inputDecArrayZero > 8) {
    outRomanArray.push("V");
   for(var i = 0; i < inputDecArrayZero; i++){
     outRomanArray.push("I");
 }
  var romanOutString = outRomanArray.join("");
  return romanOutString;

}
}





$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    //user-input
    var inputDecimalNumber = $("#inputNumb").val();
    console.log(inputDecimalNumber);
    var romanLessThanFive = findQuotientRemainder(inputDecimalNumber);
    console.log(romanLessThanFive);
  });
});
