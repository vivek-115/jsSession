let arr=[3,4,23,null,"test",true,"test",938];
//       0,1,2,  3,    4,    5,    6,    7
let arr1=Array(34,45,45,2,5,6);

console.log(Array.isArray(arr));
console.log(Array.isArray("hello"));

console.log(arr,'index of: ',arr.indexOf("test"));
console.log(arr,'index of: ',arr.lastIndexOf("test"));


let nArr=[12,3,4,56,7,3,2];
let newArr=[];
nArr.forEach((value, index)=>{
   let element=value*2;
   newArr.push(element);
});

console.log(newArr);

const isSome=nArr.some(num=>num>50);
console.log(isSome);

const isEvery=nArr.every(num=>num>20);
console.log(isEvery);

let arr2=["Banana", "appdsaadasdasdasdle", "Orassadsaange"];
console.log(arr2.sort());

const arr6=[1,2,3,4,5];
//          0,1,2,3,4
console.log(arr6.fill(0,2,4));