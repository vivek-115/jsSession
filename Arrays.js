
//JavaScript arrays are resizable and can contain a mix of different data types
const myArr=[0,1,2,3,4,5, true,"vivek"];

const myHeros=["shaktiman","IronMan","Naagraj", "Chota Bheem"];

//Method 2 to create an Array
const myArr2=new Array(1,2,3,4,5,6);

console.log(myArr[1]);


myArr.push(6);
myArr.push(7);
myArr.pop();
myArr.unshift(-99);
myArr.unshift(9);// O(N) because shifting of all the elements take place to RHS
 myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));  //Boolean
console.log(myArr.indexOf(3));  //returns the index

const newArr=myArr.join();  //binds the array and changes the datatype to String
console.log(typeof myArr, myArr);
console.log(typeof newArr, newArr);

//slice, splice
//slice : Returns a copy of section of an Array
console.log("A ", myArr);

const myn1=myArr.slice(1,3);//strt  , end 3-1
console.log(myn1);
console.log("B ",myArr);

// splice actually removed the elements from the array
// thus manipulating the Original Array whereas Slice does not do that
// slice exludes the end index whereas splice includes the end/last index
const myn2=myArr.splice(1,3);
console.log(myn2);
console.log("C ",myArr);


