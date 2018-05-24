 function ValidateForm(){
  var validFirstname = false;
  var vaildLastname = false;
  var letters = /^[A-Za-z]+$/;
  var vaildEmail = false;
  var vaildPhone = false;
  var numbers = /^[0-9]+$/;
  var vaildUsername = false;
  var vaildPassword = false;
  var vaildAddress = false;
  var vaildCity = false;
  var vaildCountry = false;
  var vaildZipcode = false;
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
  VaildLastname = true;
  // var email
  var vaildemail = document.getElementById("email").value;
    var atpos = vaildemail.indexOf("@");
    var dotpos = vaildemail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos + 2 || dotpos + 2>=vaildemail.length) 
      errorMessages +="<p>Not a valid email</p>";
  else
    vaildemail=true;
  // var phone
   var vaildphone = document.getElementById("phone").value;
    if (vaildphone.length >15 || vaildphone===null || vaildphone==="" || !vaildphone.match(numbers))
     //send error message. For example errorMessages = "<p>Invalid phone number </p>";
     errorMessages += "<p>Invalid phone number and can only input numbers </p>";
     else
       vaildphone = true;
       
  var vailduserName = document.getElementById("username").value;
  if (vailduserName===null || vailduserName==="" || vailduserName.length > 12)
    errorMessages +="<p>The Username must be entered and must be less than  12 characters</p>";
  else
    vailduserName = true;
  // password
  var vaildpassWord = document.getElementById("password").value;
  if (vaildpassWord===null || vaildpassWord==="" || vaildpassWord.length > 7)
    errorMessages +="<p>The Password must be entered and must be less than  7 characters</p>";
  else
    vaildpassWord = true;
  // address
  var vaildaddress = document.getElementById("address").value;
  if (vaildaddress==null || vaildaddress==="")
    errorMessages +="<p>The address must be entered </p>";
  else
    vaildaddress = true;
  // City 
   var vaildcity = document.getElementById("city").value;
   if (vaildcity===null || vaildcity==="")
     errorMessages +="<p>The City must be entered </p>";
   else
     vaildcity = true;
   //Country
   var vaildcountry = document.getElementById("countries").value;
   if (vaildcountry !="USA")
     errorMessages +="<p>The Country  must be United States </p>";
   else
     vaildCountry = true;
   //zipcode
   var vaildzipcode = document.getElementById("zipcode").value;
   if(vaildCountry === "USA" ) 
      {
        if (vaildzipcode === null ||  vaildzipcode==="" || !vaildzipcode.match(numbers))
     errorMessages +="<p>The zipcode must be United States and can only input numbers </p>";}
       else 
       vaildZipcode= true
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  // Make sure you return all the boolean variables that are checking each field
   return (validFirstname && vaildLastname && vaildemail && vaildphone && vailduserName && vaildpassWord && vaildaddress && vaildcity && vaildcountry && vaildzipcode) ;
  
}
