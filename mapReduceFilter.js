//1. Given an array of numbers [1, 2, 3, 4, 5], use the map() function to create a new array where each number is doubled.

function doubledArray() {
    let arr = [1, 2, 3, 4, 5]
    let doubleArray = arr.map((element) => element * 2);
    return doubleArray;
}
// console.log("Double Array: "+doubledArray())

//2. Given an array of strings ["apple", "banana", "cherry"], use map() to return a new array containing the length of each string.
function lengthOfString() {
    fruits = ["apple", "banana", "cherry", "kiwi", "strawberry"];
    let narr = fruits.map((element) => element.length);
    return narr;
}
// console.log("New Array: "+lengthOfString());

//3.Given an array of words ["hello", "world", "map", "reduce"], use map() to return a new array where each word is in uppercase.
function upperCase() {
    let words = ["hello", "world", "map", "reduce"];
    let narr = words.map((element) => element.toUpperCase());
    return narr;
}
// console.log("UpperCased Array: "+upperCase());

//4. You have an array of objects [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}]. Use map() to create a new array of strings in the format "Name: [name], Age: [age]".
function extractArray() {
    let obj = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 35 }];
    let narr = obj.map((element) => {
        return `Name: ${element.name}, Age: ${element.age}`

    });
    return narr;

}
// console.log(extractArray());

//5. Given an array of date strings ["2025-02-01", "2025-03-01", "2025-04-01"], use map() to return an array of Date objects and then format them to "DD-MM-YYYY".
function formatDate() {
    let date = ["2025-02-01", "2025-03-01", "2025-04-01"];
    let narr = date.map((element) => {
        date = new Date(element);
        let day = date.getDate();

        let month = date.getMonth() + 1;

        let year = date.getFullYear();

        // return date.toLocaleDateString();
        return `${day}-${month}-${year}`;
    });
    return narr;
}
//console.log("Date: ", formatDate());

//6. Given an array [[1, 2], [3, 4], [5, 6]], use map() to flatten each sub-array and double every number, resulting in [2, 4, 6, 8, 10, 12].
function flatSumArray(){
    let arr=[[1, 2], [3, 4], [5, 6]];

   let narr= arr.map((element)=>element.map((value)=>value*2))
   return narr.flat(2);  //can it be done without using the flat();
}
// console.log("Q.6. ",flatSumArray());


//7. Given an array of objects [{id: 1, price: 100}, {id: 2, price: 200}, {id: 3, price: 300}], use map() to create an array of objects that includes the id and the price with a 10% discount applied.

function priceObject(){
    let arr=[{id: 1, price: 100}, {id: 2, price: 200}, {id: 3, price: 300}];

  let narr=  arr.map((element)=>{
       let discountedPrice=element.price- element.price*0.1;
        return `ID:${element.id} , Discounted Price ${discountedPrice}`;
    });

    return narr;
}
// console.log("Q7 ",priceObject());

//8. Given an array [1, 2, 3, 4, 5, 6], use filter() to return a new array containing only the even numbers.

function evenNumbers(){
    let arr=[1, 2, 3, 4, 5, 6];

   let narr= arr.filter((element)=>element%2==0);
   return narr;
}
//console.log("Q8 ",evenNumbers());

//9. Given an array of strings ["apple", "banana", "pear", "grape"], use filter() to return a new array containing only the strings that are longer than 4 characters.

function filterLength(){
    let fruits=["apple", "banana", "pear", "grape","kiwi"];

  let narr=  fruits.filter((element)=>{
        if(element.length<=4){
            return element;
        }
    });
    return narr;
}
//console.log("Q9: ",filterLength());

//10. Given an array [-5, 3, -2, 8, -9, 4], use filter() to return a new array with only the negative numbers.
function negativeNumbers(){
    let arr=[-5, 3, -2, 8, -9, 4];

   let narr= arr.filter(element=>element<0);
   return narr;
}
//console.log("Q.10. ",negativeNumbers());

//11. Given an array ["apple", "banana", "avocado", "cherry"], use filter() to return a new array containing only strings that start with the letter "a".

function fruitsWithA(){
    let fruits=["apple", "banana", "avocado", "cherry"];

  let narr=  fruits.filter(element=>element.startsWith('a'));

  return narr;
}
//console.log("Q.11. ",fruitsWithA());

// 15. Given an array of objects [{name: "Alice", score: 75}, {name: "Bob", score: 85}, {name: "Charlie", score: 95}], use filter() to return a new array of objects where the score is greater than or equal to 80.

function scoreGreaterThan(){
    let arr=[{name: "Alice", score: 75}, {name: "Bob", score: 85}, {name: "Charlie", score: 95}];

   let narr= arr.filter(element=>element.score>=80);
   return narr;
}
//console.log("Q.15. ",scoreGreaterThan());

//16. Given an array [2, 3, 4, 5, 6, 7, 8, 9, 10], use filter() to return only the prime numbers.

function primeNumber(){
    let arr=[2, 3, 4, 5, 6, 7, 8, 9, 10];
   let narr= arr.filter(element=>element%2!=0);
   return narr;
}
//console.log("Q.16. ",primeNumber());

//17. Given an array ["apple", "", "banana", " ", "grape", null], use filter() to return a new array with only non-empty, non-null strings.

function nonEmptyString(){
    let fruits=["apple", "", "banana", " ", "grape", null];

  let narr=  fruits.filter((element)=>{
        if(element!="" && element!=" " && (typeof element!==null)){
            return element;
        }
    });

    return narr;
}
console.log("Q.17. ",nonEmptyString());
