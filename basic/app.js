const {calculateSum, calculateDecimal, calculateMultiply} = require("./calculate/index")

let a=100;
let b=200;

function sum() {
    console.log('fdgfdg');
    return a + b;
}


console.log("sum  ", sum(), calculateSum(a,b), calculateMultiply(a,b));

//console.log("global object like window in browser ", global)
//console.log("global object like window in browser both same", globalThis)