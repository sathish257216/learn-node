function calculateSum(a, b) {
    return a + b;
}

function calculateDecimal(a, b) {
    return (a + b).toFixed(2);
}

console.log('module.exports is a Object --- ', module.exports);
//You can do this too
//module.exports = calculateSum;
//module.exports = calculateMultiply;

module.exports = {calculateSum, calculateDecimal};