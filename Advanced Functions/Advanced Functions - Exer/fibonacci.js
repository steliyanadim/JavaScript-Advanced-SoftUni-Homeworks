function getFibonator() {
    let prevNum = 0;
    let num = 1
    return function () {
        const sum = num + prevNum;
        num = prevNum;
        prevNum = sum;
        return sum;
    }
}
let fib = getFibonator();
console.log(fib()); // 1 1+0
console.log(fib()); // 1 1 +1
console.log(fib()); // 2 2 +1
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
