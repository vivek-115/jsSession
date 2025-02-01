console.log("hello WOrld");

function onsubmitEvent(e) {
  let errorWarning=  document.getElementById('div-submit');
  e.preventDefault();
  console.log(e);
  var formElement = document.forms.LoginForm;
  var formData = new FormData(formElement);
  let name = formData.get("name");
  let email = formData.get("email");

  try {
    if (name == "" && email=="") {
      throw new Error( "Name & email can't be blank");
    }
    if(email==""){
        throw new Error( "Email can't blank");
    } if(name==""){
        throw new Error( "Name can't blank");
    }
  } catch (e) {
    console.log(e);
    errorWarning.innerHTML=e.message;
    errorWarning.style.color='red';
  }

if(name!='' && email!=''){
    errorWarning.innerHTML="Form Submitted SuccessFully !!";
    errorWarning.style.color="Green"
            
        }

}


let fname=document.getElementById('name');
fname.addEventListener('blur',function(e){
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
    }else{
        errorWarning.innerHTML=""
    }
  }catch(e){
    console.log(e);
    
   errorWarning.innerHTML=e.message;
   errorWarning.style.color='red'
  }
});
