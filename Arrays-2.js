const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros);

const allheros=marvel_heros.concat(dc_heros);  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log("concat: " ,allheros);

const all_new_heros=[...marvel_heros,...dc_heros];
console.log("Spread Method ",all_new_heros);

const annother_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=annother_array.flat(Infinity);
console.log(real_another_array);
