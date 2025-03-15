// Conditional statements
//if else

const age = 90
if(age >= 18){
    console.log('Yes, you can vote')
} else {
    console.log('No, you cannot vote')
}

// else if

if(age >= 80){
    console.log('Yes, you are an adult')

} else if (age >=18) {
    console.log('Yes, you can vote')
    
} else {
    console.log('No, you cannot vote')
}

//Ternary Operator

const age1 = 19

let res =  age1 >= 18 ? 'Yes' : 'No'

console.log(res)


//Switch cases

const option = 3

switch(option){
    case 1: console.log('Dead Poets Society')
    break
    case 2: console.log('Se7en')
    break
    case 3: console.log('A Rivers End')
    break
    default: console.log('Invalid option')
}