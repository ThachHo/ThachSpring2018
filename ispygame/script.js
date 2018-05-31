var book = document.getElementById("book");
var pan = document.getElementById("pan");
var salt = document.getElementById("salt");
var glass = document.getElementById("glassofwater");
var bowl = document.getElementById("bowl");
var count = 0;

function foundItem(item)
{ var x = document.getElementById(item)
  x.style.textDecoration = "line-through" ;
 count = count + 1;
 if(count === 5){
   var confirmi = confirm("Game Over, do you want to play again?");
   if(conformi=true){
     location.reload();
   }
   else
   {confirmi = false;
   }
 }
}

book.addEventListener("click",function(){foundItem("tbook");},false);

pan.addEventListener("click",function(){foundItem("tpan");},false);
salt.addEventListener("click",function(){foundItem("tsalt");},false);
glassofwater.addEventListener("click",function(){foundItem("tglassofwater");},false);
bowl.addEventListener("click",function(){foundItem("tbowl");},false);

