const person = {
    name: 'Vishwanath Pratap Singh',
    age: 18,
    hobbies: ()=>{
        console.log("Hobbies: reading, singing, dancing.")
    },
    //  similar way of defining the fucntion and using the variables present in the dictonary
    // greet:()=>{
    //     console.log("Hi, this is "+ this.name)
    // }

    // This method is correct one for using the varables or you simply can use the keyword function()
    greet(){
        console.log("Hi, this is "+ this.name)
    }
}

// const printName = (personData)=>{
const printName = ({name})=>{
    console.log(name)
}
printName(person)

const {name, age} = person
console.log(name,age)

const hobbies = ['Sports', 'Cooking','Joking']
const [...hobby] = hobbies;
console.log(...hobby)