function createRhombus(pLines, pColorEven, pColorOdd, pSymbol) {
  upLeft(pLines, pColorEven, pColorOdd, pSymbol); 
  downLeft(pLines, pColorEven, pColorOdd, pSymbol);
  upRight(pLines, pColorEven, pColorOdd, pSymbol);
  downRight(pLines, pColorEven, pColorOdd, pSymbol);
}
function upLeft(pLines,pColorEven, pColorOdd, pSymbol){
  var output ="";
  //how many to print
  //console.log("test");
  for (i=1;i<=pLines;i++)
   { output +="<p>";
    for(x=1;x<=pLines-i;x++){
      //output +="-";
      output +="<span class='space'>" + pSymbol +"</span>";
    }
    // add asterix
    for (j=x;j<=pLines;j++){
      if (j%2)
        output +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>"; 
      else
        //odd
      output +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    }
    //close the paragraph
    output +="</p>";
  }
  //console.log(output)
  document.getElementById("upLeft").innerHTML = output;
}
function downLeft(pLines,pColorEven, pColorOdd, pSymbol){
  var output ="";
 //how many to print
  //console.log("test");
  for ( i=pLines;i > 0;i--){
    //console.log(output);
    //Fill in the left side of every row space or blanks
    output +="<p>";
    for(x=1;x<=pLines-i;x++){
      //output +="-";
      output +="<span class='space'>" + pSymbol +"</span>";
    }

    // add asterix
    for (j=x ; j<=pLines; j++){
      if (j%2)
        output +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        output +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    }
    //close the paragraph
    output +="</p>";
  }
  //console.log(output)
  document.getElementById("downLeft").innerHTML = output;
}
  function upRight(pLines,pColorEven, pColorOdd, pSymbol){
var output ="";
 //how many to print
//console.log("test");
for (i=0;i<pLines;i++){
  //console.log(output);
  output +="<p>";


// add asterix
for (j=0 ; j<=i; j++){
  if (j%2)
    output +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
  else
    //odd
    output +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
}
  //close the paragraph
output +="</p>";
}
//console.log(output)
document.getElementById("upRight").innerHTML = output;
}
function downRight(pLines, pColorEven, pColorOdd, pSymbol){
  var output ="";
  for (i=pLines;i > 0;i--){
    output +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<i;j++){

      //Is the position even or odd so we change the color
      if (j%2) 
        //even
        output +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
       output +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
   output +="</p>";
    // console.log(rLine);

  }

  document.getElementById("downRight").innerHTML = output;
}