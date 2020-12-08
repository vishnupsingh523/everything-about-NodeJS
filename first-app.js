// var name = "Vishwanath"
// var age = 18
// var hasHobbies = true

//let is changeble and const is not changeable

const name = "Vishwanath"
let age = 17
const hasHobbies = true

age = 18
// 3 ways of declaring and defining function
// -function <function-name>(){}
// -const <function-name> = funciton(arguments){}
// -const <fucntion-name> = (arguments..)=>{}

function summarizeUser(userName, userAge, userHobby){
    return (
        'Name is '+ userName + ', age is ' + userAge+ ' and the user has hobbies: '+ userHobby
    );
    }

    console.log(summarizeUser(name,age,hasHobbies))