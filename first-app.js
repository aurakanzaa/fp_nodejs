// const fs = require('fs');
// // create new file with field 'hello from node.js
// fs.writeFileSync('hello.txt', 'hello from node.js');

let name = 'ara';
let age = 21;
let hobby = true; //boolean

//gabisa pake const
age =80;

const summarizeUser = (userName,userAge,userHobby) => {
    
    return ('name is ' + 
    userName + 
    ', age is ' + 
    userAge + 
    'and the user has hobbies ' + 
    userHobby);
};

// const add = (a,b) => a+b;
// const addOne = (a) => a+1;

// console.log(add(1,2));
// console.log(addOne(1));

console.log(summarizeUser(name,age,hobby));