// Get the input fields
// var password = document.querySelector(".password");
// var phone = document.querySelector('.phone');
// var names = document.querySelector('.name');
// var lastName= document.querySelector(".lastN");

var nombre= document.getElementById("fName");
var email=document.getElementById("fEmail");
var address=document.getElementById("fAddress");
var lastName= document.getElementById("fLastN");
var passw= document.getElementById("fPassword");
var phone= document.getElementById("fPhone");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorEmail = document.getElementById('errorEmail'); 
var errorAddress = document.getElementById('errorAddress');  
var errorLastN = document.getElementById('errorLastN');   
var errorPass = document.getElementById('errorPassword'); 
var errorPhone = document.getElementById('errorPhone'); 

function validateText(nombre){
   let letters=/^[a-zA-Z\sáéíóú]+$/;
   if(nombre.search(letters)){
      return false;
  }else{
      return true;
  }
}

function validateEmail(email){

   let expReg=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

   let isValid=expReg.test(email);

   if(isValid){
      return true;
   }else{
      return false;
   }

}


// Exercise 6
function validate() {

   if(nombre.value==0 || nombre.value.trim().length<3){
      errorName.style.display="block";
   
   }else if(validateText(nombre.value)==false){
     errorName.style.display="block";
     errorName.innerHTML="This field is only text";

   }else{
      errorName.style.display="none";
   }

   if(email.value==0 || email.value.trim().length<3){
      errorEmail.style.display="block";

   }else if(validateEmail(email.value)==false){
      errorEmail.style.display="block";
      errorEmail.innerHTML="This field has to be is format email";
   
   }else{      
      errorEmail.style.display="none";
   }

   if(address.value==0 || address.value.trim().length<3){
      errorAddress.style.display="block";
      
   }else{    
      errorAddress.style.display="none";
   }
   
   
   if(lastName.value==0 || lastName.value.trim().length<3){
     errorLastN.style.display="block";

   }else if(validateText(lastName.value)==false){
      errorLastN.style.display="block";
      errorLastN.innerHTML="This field is only text"
    

   }else{
      errorLastN.style.display="none";
   }


   if(passw.value==0 || passw.value.trim().length<3){
      errorPass.style.display="block";
       
    }else{
      errorPass.style.display="none";
    }


    if(phone.value==0 || phone.value.trim().length<3){
      errorPhone.style.display="block";
       
    }else{
      errorPhone.style.display="none";
    }
}