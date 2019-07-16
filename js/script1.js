function validateForm() {
  var err = '' , name , nspace , lastname , lspace , phnno , mob ,
  officeno , reg , emaillenth , email , pascomp ,passwrd , passlenth , paswrd , cpaswrd ,
  dobmonth , dobyer , dobday , today , day , month , year , lastyear , age ,
  cpaslenth , monage , nage , nmon , gender , genvalue , hobby1 , hobby2 , hobby3 ,
  aboutu , abtspace ;
  //this is a validation for first name
  name = document.getElementById("fname").value;
  nspace = name.trim();

  if (nspace.length < 1) {
    err += ' -You must enter Fist Name'; 
  }  
  //end of first name validation

  //this is a validation for last name
  lastname = document.getElementById("lname").value;
  lspace = lastname.trim();
  if (lspace.length < 1)  {
  	err += '\n -You must enter Last Name'; 
  }	
  //end of last name validation

  //this is a validation for phone number
  mob = /^[1-9]{1}[0-9]{9}$/;
  phnno = document.getElementById("pnum").value;
  phnnolenth = phnno.length;
  if (isNaN(phnno)) {
      err += '\n -Phone No must enter numeric value only';
  }
  else if (phnnolenth < 1) {
      err += '\n -You must enter number';
 }
  else if (mob.test(phnno) == false) 
  {
    err += '\n -Phone No must have proper Phnno'; 
  }  
 //end of phone number validation
  
 //this is a validation for office number
officeno = document.getElementById("ofnumb").value;
if (isNaN(officeno)){
  err += '\n -Office No must have numeric value only'; 
}
 //end of office number validation

 //this is a validation for email id
reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
email = document.getElementById("ema").value;
emaillenth = email.length;
if (emaillenth < 1) {
  err += '\n -You must enter Email';
}
else if (reg.test(email) == false) 
{
  err += '\n -You must enter valid Email'; 
}  
//end of email id validation

//this is a validation for password
pascomp =/^[0-9a-zA-Z]+$/;
passwrd = document.getElementById("ppas").value;
passlenth=passwrd.length;
if (passlenth < 1) {
      err += '\n -You must enter Password';
}
else if (pascomp.test(passwrd) == false) 
{
  err += '\n -You must enter aplhanumeric value only'; 
}  
else if(passlenth < 8 || passlenth > 12){  
 err += '\n -Password should be between 8 to 12'; 
 
} 
//end of password validation

//this is a validation for confirm password
paswrd = document.getElementById("ppas").value;
cpaswrd = document.getElementById("cppas").value;
cpaslenth = cpaswrd.length;
if (paswrd != cpaswrd && cpaslenth > 1) {
     err += '\n -Password must be same' ;
  }
//end of confirm password validation

 //this is a validation for age
dobday = document.getElementById("day1").value;
 dobmonth = document.getElementById("mon").value;
 dobyer = document.getElementById("yer").value;
if (dobmonth == "month" || dobyer == "2019") {
    err += '\n -Please select your Age'
    document.getElementById('age1').value ="";
 }
 
//end of age validation

//this is a validation for radio button
  if (document.myform.gender[0].checked == false && document.myform.gender[1].checked == false) 
{
  err += '\n -Please select one Gender' ;
}
//end of radio button validation

//this is a validation for checkbox
hobby1=document.getElementById("checkbox_sample18");
hobby2=document.getElementById("checkbox_sample19");
hobby3=document.getElementById("checkbox_sample20");
if ((hobby1.checked == false) && (hobby2.checked == false) && (hobby3.checked == false)) 
{
  err += '\n -Please select one Hobby' ;
}
//end of checkbox validation

//this is a validation for about you
aboutu;
aboutu = document.getElementById('abtyou').value;
abtspace = aboutu.trim();

  if (abtspace.length < 1) {
    err += '\n -You must enter Aboutyou'; 
  }  
//end of validation for about you

//this is to show all error alert
if(err != '') { 
 alert(err); 
 return false; 
} 
//end of error alert

//this is to show success alert
else {
  alert("success");
  //return true;
}
//end of success alert
}

function changedate(){
  var dobday , dobmonth , dobyer , today , month , year ,
  age , monage , nage , nmon , select , op , yeropt , myselect ;
 dobday = document.getElementById("day1") .value;
 dobmonth = document.getElementById("mon").value;
 dobyer = document.getElementById("yer").value;
 today = new Date();
 month = today.getMonth();
 year = today.getFullYear();
 index = document.getElementById("mon");
 indexno = index.selectedIndex; 
 document.getElementById("day").innerHTML = "01";
 document.getElementById("month").innerHTML = dobmonth ;
 document.getElementById("year").innerHTML = dobyer ;
  op = document.getElementById("day1").getElementsByTagName("option");
  console.log(op);
 for (var i = 0; i < op.length; i++) {  
           op[i].style.display = "none"; 
    }
 
  if (dobmonth == 'Jan' || dobmonth == 'Mar' || dobmonth == 'May' || dobmonth == 'Jul' || dobmonth == 'Aug'
   || dobmonth == 'Oct' || dobmonth == 'Dec') {
     for (var i = 0; i < op.length; i++) {  
           op[i].style.display = "block"; 
    }
 }
 else if (dobmonth == 'Apr' || dobmonth == 'Jun' || dobmonth == 'Sep' || dobmonth == 'Nov') {
     for (var i = 0; i < (op.length - 1) ; i++) {  
           op[i].style.display = "block";
    }
 }
 else if ((dobmonth == 'Feb' && dobyer%4 == 0)) {
     for (var i = 0; i < (op.length - 2) ; i++) {  
           op[i].style.display = "block";
    }
 }
 else if (dobmonth == 'Feb') {      
     for (var i = 0; i < (op.length - 3) ; i++) {  
           op[i].style.display = "block";
 }
}
 if (indexno > month) {
  year--;
  month+=12;
  age = year-dobyer;
  monage = month - indexno;
  document.getElementById('age1').value = age +"."+ monage +" years" ;
}
else{
  nage = year-dobyer;
  nmon = month - indexno;
  document.getElementById('age1').value = nage +"."+ nmon +" years" ;
     }
}


function changdat(){
var dobday ; 
dobday = document.getElementById("day1") .value;  
document.getElementById("day").innerHTML = dobday ;
}


function myFunction(){
  var today , month , year , lastyear , yeropt , dayopt ;
  today = new Date();
 month = today.getMonth();
 year = today.getFullYear();
 lastyear = year - 30 ;
     for (var i = 1 ; i <= 31 ; i++) {
            dayopt +="<option>" + i + "</option>";
        } 
 document.getElementById("day1").innerHTML = dayopt;
 
 for (var i = year ; i >= lastyear ; i--) {
   yeropt +="<option>" + i + "</option>";
 }
 document.getElementById("yer").innerHTML = yeropt;
}
