const person = {
    name: 'Vishwanath',
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

// console.log(person)
// person.greet()

const hobbies = ['Sports', 'Cooking', 'Joking']
// for ( let hobby of hobbies){
//     console.log(hobby)
// }

// console.log(hobbies.map(hobby =>{return 'Hobby: '+hobby}))
// console.log(hobbies.pop())
// console.log(hobbies.reverse())
// console.log(hobbies.push(['Styling','Joking','Painting']))
// console.log(hobbies)

const copiedPerson = {...person}
console.log(copiedPerson)
const copiedArray = [...hobbies]
console.log(copiedArray)

// ... rest operator
const toArray = (...args) =>{
    return args
}
console.log(toArray(1,2,3,4,5,3))