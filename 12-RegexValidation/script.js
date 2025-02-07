console.log("Hello World");
let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regexPhoneNumber=/^[789]\d{9}$/;

function onsubmitFn(e){
  let errorWarning=  document.getElementById('submit-div');
  
    e.preventDefault();
    console.log("hello World");
  var form= document.forms.LoginForm;
  var formElement=new FormData(form);
  console.log(formElement);
  var name=formElement.get('name');
 var email= formElement.get('email');
 var phoneNum=formElement.get('phoneNum');

 try{
    if(name=='' && email=='' && phoneNum==''){
       throw new Error("Name , Email and Phone is Blank");
        
    }else if(name==''){
        throw new Error("Name is Blank");
    }else if(email==''){
        throw new Error("Email is Blank");
    }else if(phoneNum==''){
        throw new Error("Phone Number is Blank");
    }else{
        if(!regexEmail.test(email)){
            throw new Error("Email Not valid");
          }if(!regexPhoneNumber.test(phoneNum)){
              throw new Error("Phone Number is not valid");
          }
    }
     
 }catch(e){
    errorWarning.innerHTML=e.message;
    errorWarning.style.color='red';
 }
 if(name!='' && email!='' && phoneNum!='' && (regexEmail.test(email)) && (regexPhoneNumber.test(phoneNum))){
    console.log("Form Submitted SuccessFully");
 }
}

let fname=document.getElementById('name')

fname.addEventListener('blur', function(){
    let errorWarning= document.getElementById('div-name');
    var formData=document.forms.LoginForm;
   formElement= new FormData(formData);
  let name= formElement.get('name');
  try{
    if(name==''){
        throw new Error("Name Should not be Blank");
    }else{
         errorWarning.innerHTML="";
    }
  }catch(e){
    console.log(e);
  
   errorWarning.innerHTML=e.message;
   errorWarning.style.color='red'

  }
});

let email=document.getElementById('email');
email.addEventListener('blur',function(e){
    let errorWarning= document.getElementById('div-email');
    var formData=document.forms.LoginForm;
   formElement= new FormData(formData);
  let email= formElement.get('email');
  try{
    if(email==''){
        throw new Error("email Should not be Blank");
    }else if(!regexEmail.test(email)){
        throw new Error("Invlaid Email ID")
    } 
    else{
        errorWarning.innerHTML=""

    }
  }catch(e){
    console.log(e);
   errorWarning.innerHTML=e.message;
   errorWarning.style.color='red'
  }
});

let phoneNum=document.getElementById("phoneNum");
phoneNum.addEventListener('blur', function(){
    let errorWarning= document.getElementById('div-phoneNum');
    var formData=document.forms.LoginForm;
   formElement= new FormData(formData);
   let phoneNum= formElement.get('phoneNum');
   try{
    if(phoneNum==''){
        throw new Error("Phone Should not be Blank");
       }else if(!regexPhoneNumber.test(phoneNum)){
         throw new Error("Phone Number is invalid");
       }else{
        errorWarning.innerHTML=""
    }
   } catch(e){
    console.log(e);
    errorWarning.innerHTML=e.message;
    errorWarning.style.color='red'
   }
});