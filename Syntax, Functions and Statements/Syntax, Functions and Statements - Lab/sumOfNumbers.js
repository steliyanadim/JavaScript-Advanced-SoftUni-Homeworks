function sumOfNumbers(arg1, arg2) {
    let firstNum = Number(arg1);
    let secondNum = Number(arg2)
    let result = 0;
for(let i = firstNum; i <= secondNum; i++){
    result += i
}
console.log(result);
}
sumOfNumbers('1', '5')