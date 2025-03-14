console.log("Testing")

//Variables
//Var
// JS is a loosely typed language.

var age = 22;       // We dont assign datatypes in JS it assumes anything u provide as input.

console.log(age)

age = "Galileo"     // Here the datatype is changed to a string and printed regardless of what you assign first.

console.log(age)

//Naming Conventions
//firstname, first_name,FirstName,Firstname are all valid names. It cannot start with numbers of special characters.
//Spaces and hyphens are not valid in the names.
//firstName (Most preferred) Camel Casing

var firstName = "Apostle"
console.log(firstName)

//Var is  a global variable which can be reassigned.

//let 
//let can be used locally and globally but makes it better using local to avoid errors.
// can be reassigned.

let ran = 22
console.log(ran)

if(true) {
    var a = 20;
}

console.log(a)

//const 
//Scope of const is always local
//Values cannot be reassigned
//It is necessary to define value in the beginning for const to work.
const rand = 50
console.log(rand)



