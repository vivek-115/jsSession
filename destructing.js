const fruits=['mango','apple', 'banana','kiwi', 'strawberry'];

const mango=fruits[0];
console.log(mango);

const [a,b,...z]=fruits;
console.log(a,b);
console.log(z);

//Object Destructing
const user={
    name:"Tom",
    email:"tom@gmail.com",
    password:"password@123",
    
}
const name='Vivek';
// console.log(user.name);
// const {name:fullname,email,contact=123456677}=user;
// console.log(fullname,email,contact,name);

//delete user.password;
console.log(user);

const {password,...userdata}=user;
console.log(userdata);





