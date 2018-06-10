var d = new Date();
document.getElementById('date').innerHTML = d;
// contact ME
function ValidateForm(){
var validFirstname = false;
var validLastname = false;
var letters = /^[A-Za-z]+$/;
var validEmail = false;
var validComment =false;
var errorMessages ="";

//var firstname
var firstName = document.getElementById("firstname").value;
if (firstName===null || firstName==="" || !firstName.match(letters))
  errorMessages="<p>The Firstname must be entered and only letters are accepted.</p>";
else
  validFirstname = true;
// var lastname
var lastName = document.getElementById("lastname").value;
if (lastName===null || lastName=="" || !lastName.match(letters))
  errorMessages +="<p>The Lastname must be entered and only letters are accepted.</p>";
else
  validLastname = true;
// var email
var validemail = document.getElementById("email").value;
var atpos = validemail.indexOf("@");
var dotpos = validemail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos + 2 || dotpos + 2>=validemail.length) 
  errorMessages +="<p>Not a valid email.</p>";
else
  validEmail=true;
// var comment 
var validcomment = document.getElementById("commentbox").value;
if (validcomment===null || validcomment=="")
  errorMessages += "<p>The Comment need to be entered.</p>";
else
  validComment = true;

document.getElementById("errorMessages").innerHTML = errorMessages;

return (validFirstname && validLastname && validEmail && validComment) ;

}
