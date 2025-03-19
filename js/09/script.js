// Higher Order Functions and Callback

function add(a, b, cb){
    let result = a + b
    cb(result)
}

add(2, 4, (val) => console.log(val))

