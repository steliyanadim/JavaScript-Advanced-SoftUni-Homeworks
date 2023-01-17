function printEveryNElement(arr, number) {
    return arr.filter((el, i) => i % number === 0)
}
console.log(printEveryNElement(['dsa',
'asd', 
'test', 
'tset'], 
2)); 