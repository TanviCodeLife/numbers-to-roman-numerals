  function checkForOnes(inputUserNumber){
    var I = 1;
    var V = 5;
    var X = 10;
    var romanOutArray = [];
    if (inputUserNumber > I && inputUserNumber < 4){
      var quotient = inputUserNumber / I;
      var remainder = inputUserNumber % I;
      var qToPush = "I";
      var rToPush = "";

    } else if (inputUserNumber >= V && inputUserNumber < 9 ) {
      quotient = parseInt(inputUserNumber / V);
      remainder = inputUserNumber % V;
      console.log(quotient, remainder);
      qToPush = "V";
      rToPush = "I";
    } else if (inputUserNumber === V - I){
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


  function checkForTens(inputUserNumber){
    var I = 1;
    var V = 5;
    var X = 10;
    var L = 50;
    var C = 100;
    var D = 500;
    var M = 1000;
    var romanOutArray = [];
    if (inputUserNumber < 40 && inputUserNumber >= 10){
      var quotient = parseInt(inputUserNumber / 10);
      var remainder = parseInt(inputUserNumber % 10);
      console.log(quotient, remainder);
      var qToPush = "X";
      romanOutArray = generateFirstHalfWithQuotient(quotient, 0, qToPush, 0);

    }  else if (inputUserNumber >= 40 && inputUserNumber < 50){
      romanOutArray.push("X", "L");
      remainder = parseInt(inputUserNumber % 10);

     }

    var romanOutString = romanOutArray.join("");
     console.log(remainder);
    var romanOutStringOnes = checkForOnes(remainder);
    console.log(romanOutStringOnes);
    var result = romanOutString.concat(romanOutStringOnes);
    console.log(result);
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
      var romanLessThanFive = checkForTens(inputDecimalNumber);
      console.log(romanLessThanFive);
    });
  });




  // else if(inputUserNumber >= 1000){
  //   quotient = inputUserNumber / 1000;
  //   remainder = inputUserNumber % 1000;
  //   console.log(quotient, remainder);
  //   var qToPush = "M";
  // }
  // else if(inputUserNumber < 1000 && inputUserNumber >= 500){
  //   quotient = inputUserNumber / 500;
  //   remainder = inputUserNumber % 500;
  //   console.log(quotient, remainder);
  //   var qToPush = "D";
  // }
  // else if(inputUserNumber < 500 && inputUserNumber >= 100){
  //   quotient = inputUserNumber / 100;
  //   remainder = inputUserNumber % 100;
  //   console.log(quotient, remainder);
  //   var qToPush = "C";
  // }
  // else if(inputUserNumber < 100 && inputUserNumber >= 50){
  //   quotient = inputUserNumber / 50;
  //   remainder = inputUserNumber % 50;
  //   console.log(quotient, remainder);
  //   var qToPush = "L";
  // }
