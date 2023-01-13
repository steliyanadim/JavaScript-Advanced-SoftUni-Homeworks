function magicMatrices(matrix) {
    let reduceFunc = (acc, value) => acc + value;
    let sum = matrix[0].reduce(reduceFunc);
    let curSum;
    for (let i = 0; i < matrix.length; i++) {
        curSum = matrix[i].reduce(reduceFunc);

        if (curSum !== sum) {
            return false;
        }
    }
    for (let j = 0; j < matrix.length; j++) {
        curSum = 0;
        for (let k = 0; k < matrix.length; k++) {
            curSum += matrix[j][k];
        }
        if (curSum !== sum) {
            return false;
        }
    }
    return true;
}
console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]))
