const person = {
    name : 'ara',
    age : 21,
    greet:() => {
        console.log('hai, saya ' + this.name);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['sport', 'cooking'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby' + hobby));
// console.log(hobbies);

// hobbies.push('programming');
// console.log(hobbies);

const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (arg1, arg2,arg3)=>{
    return[arg1,arg2,arg3];
};

console.log(toArray(1,2,3));