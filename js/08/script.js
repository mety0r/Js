// //Arrow Functions

// // Syntax

// const sayHello = () =>{
//     console.log("Hey")
// }
// sayHello()

// const add = (a, b) => a + b
   
// console.log(add(2,3))

// // Arguments
// const addNumbers = (...nums) => {
//     console.log(nums)
// }


// addNumbers(1, 2, 3, 4, 5)

// Hoisting allows accessing of functions before defining with normal functions in arrow only accessible after defining
function sayHey() {
    console.log("Hey")

}
sayHey()


// This Keyword
const obj = {
    value: 20,
    myFunction: function () {
        console.log(this.value)
    },
}

obj.myFunction()