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

