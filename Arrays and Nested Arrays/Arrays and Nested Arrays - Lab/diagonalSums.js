function diagonalSums(matrix){
    let leftDiagonalSum = 0;
    let rigtDiagonalSum = 0;

    let leftIndex = 0;
    let rigtIndex = matrix.length - 1;

    matrix.forEach(arr => {
        leftDiagonalSum += arr[leftIndex++];
        rigtDiagonalSum += arr[rigtIndex--];
    });

    console.log(leftDiagonalSum + ' ' + rigtDiagonalSum);
}
diagonalSums([[3, 5, 17],
            [-1, 7, 14],
            [1, -8, 89]])