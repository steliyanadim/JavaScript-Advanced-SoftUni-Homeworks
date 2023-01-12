function biggestElement(arrays) {
    let result = arrays[0];

    for (let i = 1; i < arrays.length; i++) {
        result = result.concat(arrays[i])
    }

    result = result.sort((a, b) => a - b);
    let maxNum = result.pop();

    return maxNum;
}
biggestElement([[20, 50, 10],
        [8, 33, 145]])