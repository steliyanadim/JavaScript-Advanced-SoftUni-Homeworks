function processOddPositions(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            result.push(arr[i] * 2);
        }
    }
    result = result.reverse()
        .join(' ');
    return result;
}
let finalResult = processOddPositions([3, 0, 10, 4, 7, 3]);
console.log(finalResult);