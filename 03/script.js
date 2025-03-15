//Data Types 
//Numbers

let num1 = 5.67         //Can take any number or decimals it doesnt matter
let num2 = 4

console.log(num1 + num2)
console.log(num1 - num2 + 10 )


const first_name = "Freud" // Can use single or double quotes
const last_name = 'ian'
console.log(first_name + last_name)


//Booleans - True or false values
let isLoggedIn = true
console.log(isLoggedIn + 10)

//true - 1
//false - 0



//Null
let lastLoginDate = null //Null takes up space unlike undefined

console.log(lastLoginDate)


//Objects
const person = {
    firstname:'Byzant',   // These are the properties of object
    lastname: 'ine',
    age: 22,
    isLoggedIn: false
}

console.log(person)     //Upon calling the object we obtain the properties of it 
console.log(person.age) // Each property can also be called seperately

// Lets say there is a string '1' + '1'
console.log('1' + '1')
console.log('1' + 1)         // Both the commands will concatenate

console.log('1' * 11) //If u multiply a string and a number you will get a number 

//Typeof operator
console.log(typeof('1' * 11))  //Can be used to find the type of data operator

console.log('a' * 1)  // when multiplying we get Not a Noun