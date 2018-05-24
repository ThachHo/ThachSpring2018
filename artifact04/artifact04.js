 function ValidateForm(){
  var validFirstname = false;
  var vaildLastname = false;
  var letters = /^[A-Za-z]+$/;
  var vaildEmail = false;
  var vaildPhone = false;
  var numbers = /^[0-9]+$/;
  var validUsername = false;
  var validPassword = false;
  var validAddress = false;
  var validCity = false;
  var validCountry = false;
  var validZipcode = false;
  var errorMessages ="";
  
  //var first name
  var firstName = document.getElementById("firstname").value;
  if (firstName===null || firstName==="" || firstName.length>= 20 || !firstName.match(letters))
    errorMessages="<p>The Firstname must be entered and must be less than 20 characters. Only letters are accepted</p>";
  else
    validFirstname = true;
// var last name
  var lastName = document.getElementById("lastname").value;
   if (lastName===null || lastName==="" || lastName.length>= 50 || !lastName.match(letters))
     errorMessages +="<p>The Lastname must be entered and must be less than 50 characters. Only letters are accepted</p>";
  else
  validLastname = true;
  // var email
  var validemail = document.getElementById("email").value;
    var atpos = vaildemail.indexOf("@");
    var dotpos = vaildemail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos + 2 || dotpos + 2>=vaildemail.length) 
      errorMessages +="<p>Not a valid email</p>";
  else
    validemail=true;
  // var phone
   var validphone = document.getElementById("phone").value;
    if (validphone.length >15 || validphone===null || validphone==="" || !validphone.match(numbers))
     //send error message. For example errorMessages = "<p>Invalid phone number </p>";
     errorMessages += "<p>Invalid phone number and can only input numbers </p>";
     else
       validphone = true;
       
  var validuserName = document.getElementById("username").value;
  if (validuserName===null || validuserName==="" || validuserName.length > 12)
    errorMessages +="<p>The Username must be entered and must be less than  12 characters</p>";
  else
    validuserName = true;
  // password
  var validpassWord = document.getElementById("password").value;
  if (validpassWord===null || validpassWord==="" || validpassWord.length > 7)
    errorMessages +="<p>The Password must be entered and must be less than  7 characters</p>";
  else
    validpassWord = true;
  // address
  var validaddress = document.getElementById("address").value;
  if (validaddress==null || validaddress==="")
    errorMessages +="<p>The address must be entered </p>";
  else
    validaddress = true;
  // City 
   var validcity = document.getElementById("city").value;
   if (validcity===null || validcity==="")
     errorMessages +="<p>The City must be entered </p>";
   else
     validCity = true;
   //Country
   var validcountry = document.getElementById("countries").value;
   if (validcountry !="USA")
     errorMessages +="<p>The Country  must be United States </p>";
   else
     validCountry = true;
   //zipcode
   var validzipcode = document.getElementById("zipcode").value;
   if(validCountry === "USA" ) 
      {
        if (validzipcode === null ||  validzipcode==="" || !validzipcode.match(numbers))
     errorMessages +="<p>The zipcode must be United States and can only input numbers </p>";
      else validZipcode = true}
       else 
       validZipcode= true
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  // Make sure you return all the boolean variables that are checking each field
   return (validFirstname && validLastname && validemail && validphone && validuserName && validpassWord && validddress && validCity && validCountry && validZipcode) ;
  
}
