console.log("Hello World");
let d=new Date(0);  //will display the date and time of when the calender was formed
console.log(d);

let d1=new Date();
console.log(d1);  // will display the current date

console.log(d1.toString());
console.log(d1.getTime());  // will return some integer value e.g 1737533043754
console.log(d1.toLocaleString());  // to an understandable time format   1/22/2025, 1:35:58 PM
console.log(d1.toLocaleDateString())  //1/22/2025
console.log(d1.getDay());  //returns Integer value from (0-6)



const days=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
//              0       1           2         3             4          5        6
console.log(days[d1.getDay()]);

console.log(d1.getHours());  //24 hours format eg 1:00 O clock pm  --> O/P '13'
console.log(d1.getMinutes());  //1:41 pm  --> O/P '41'
console.log(d1.getSeconds());
console.log(d1.getFullYear());  //return the year --> O/P '2025'
console.log(d1.getMilliseconds());
console.log(d1.getTime());
