function sumFirstLast(elements) {
    let numbers = elements.map(Number);
    let first = numbers.shift();
    let last = numbers.pop();
    let sum = first + last;
    return sum;
}
let result = sumFirstLast(['20', '30'])
console.log(result);