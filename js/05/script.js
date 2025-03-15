//Logical Operators

// AND -> All conditions must be true (&&)

const age = 22
const gender = 'female'    // A single = means the value is being assigned to the variable

if(age >= 18 && gender == 'male'){              // A double == means the value is being compared 
    console.log('You are an adult male')
}

// OR operator -> Atleast one condition must be true

if(age >= 18 || gender == 'male'){
    console.log('You are an adult male')
}

//NOT 

const num = 5

if(!(num % 2 == 0)){
    console.log('Odd')
}