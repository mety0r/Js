//functions

function sayHello(){
    console.log("Hey user") 

}   

sayHello()

//Arguments and parameters
            // Arguments
function add(num1, num2){
    console.log(num1 + num2)
}

add(5,10)   //parameters

function multiply(num1, num2){
    // console.log(num1 * num2)
    let ans = num1 * num2
    return ans
}

let a = multiply(10, 9)
console.log("the result is", a)

//Unlimited arguments Accept
function addNumbers(){
   let res = 0
   for(let i = 0; i < arguments.length; i=i+1){
    res = res + arguments[i]

   }
   return res
}

let result = addNumbers (10, 20, 30, 40)
console.log(result)