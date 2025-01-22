//singleton  -> 

//Object Literals
//Object.create

const mySmy=Symbol("key1");
const JsUser = {
    name: "Hitesh",
    "full name":"Hitesh Choudhary",
    [mySmy]:"$2000",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySmy]);

JsUser["email"]="hitesh@gamil.com";
console.log(JsUser);
Object.freeze(JsUser);  // The freeze() restricts from manipulating the Object


JsUser["email"]="hitesh@chatGpt.com";
console.log(JsUser);

