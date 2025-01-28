const btn = document.getElementById("cal");
let reset=document.getElementById("reset");
let deletebtn=document.getElementById("delete");
const symbols = btn.addEventListener("click", function (e) {
  let dbox = document.getElementById("dbox").value;

  let arr = dbox.split("");

  let lElement = arr[arr.length - 1];

  if (
    lElement == "+" ||
    lElement == "-" ||
    lElement == "/" ||
    lElement == "%" ||
    lElement == "*" ||
    lElement == "="
  ) {
    arr.pop();
  }

  let ot = arr.join("");
  let result = cal(ot);
  console.log(result);
  document.getElementById("dbox").value = result;
});

function cal(input) {
  return eval(input);
}

//reset
reset.addEventListener("click", function(){
    document.getElementById("dbox").value = "";
});


//delete Element
deletebtn.addEventListener('click',function(){
   
    let dbox = document.getElementById("dbox").value;
    let arr = dbox.split("");
   let a= arr.pop();
   let ot = arr.join("");
   document.getElementById("dbox").value = ot;
})

