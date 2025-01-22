
let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString())  //gives the day and the date as O/P:-' Wed Jan 22 2025 '
console.log(myDate.toLocaleString());  //o/p :- 1/22/2025, 8:29:28 AM
console.log(typeof myDate);

// let myCreatedDate=new Date(2023, 1,23); // parameter 1 : year  , parameter2: Month  , parameter3: date
// let myCreatedDate=new Date(2023, 1,23,5,3);// parameter 4 : hours, parameter 5 : minutes 
let myCreatedDate=new Date("2023-01-24");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=new Date();
console.log(myTimeStamp.getTime());
console.log(myCreatedDate.getTime());

let newDate=new Date();
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());