setInterval(()=>{
    d=new Date();
    hours=d.getHours();
    minutes=d.getMinutes();
    seconds=d.getSeconds();
    
    hRotation=(hours*30)+(minutes/2);
    mRotation=minutes*6;
    sRotation =seconds*6;

   hourhand= document.getElementById("hourHand");
   hourhand.style.transform='rotate(' + hRotation + 'deg)';

   minuteHand=document.getElementById("minuteHand");
   minuteHand.style.transform='rotate('+mRotation+'deg)';

   secondHand=document.getElementById("secondHand");
   secondHand.style.transform='rotate('+sRotation+'deg)';


    
},1000);