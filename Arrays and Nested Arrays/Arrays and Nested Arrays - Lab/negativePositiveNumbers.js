function negativePositiveNumbers(numbers) {
    let result = [];
    for (let num of numbers) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    result.forEach(element => console.log(element));
}
negativePositiveNumbers([3, -2, 0, -1])