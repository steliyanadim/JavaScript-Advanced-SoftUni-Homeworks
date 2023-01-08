function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let currentNum = 0;
        let resultLength = result.length;
        if (resultLength - 1 < k) {
            result.forEach(num => currentNum += num);
            result.push(currentNum);
        } else {
            let tempArr = result.slice(resultLength - k, resultLength)
                .forEach(num => currentNum += num);
            result.push(currentNum);
        }
    }
    return result;
}
let finalResult = lastKNumbersSequence(8, 2)
console.log(finalResult);