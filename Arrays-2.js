const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros);

const allheros=marvel_heros.concat(dc_heros);  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log("concat: " ,allheros);

//spread
const all_new_heros=[...marvel_heros,...dc_heros];
console.log("Spread Method ",all_new_heros);

//flat
const annother_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=annother_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh")); // return boolean value after checking whether the object is an array or not
console.log(Array.from("Hitesh"));//converts a String into an Array like the split() method
console.log(Array.from({name:"Vivek"}));//interesting case : If it can't convert it into String then 
                                        // it will return empty

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));                                        
