function extractIncreasingSubsequence(numbers) {
    let biggestNum = numbers[0];
    let result = [];
    numbers.forEach(num => {
        if (num >= biggestNum) {
            result.push(num)
            biggestNum = num;
        }
    });
    return result;
}
extractIncreasingSubsequence([1,
    1,
    8,
    4,
    10,
    12,
    3,
    2,
    24
])