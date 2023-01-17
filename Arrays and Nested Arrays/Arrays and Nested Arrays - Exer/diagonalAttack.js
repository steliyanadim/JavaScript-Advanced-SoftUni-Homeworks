function diagonalAttack(arr) {
    console.log(typeof diagonalAttack);
    let matrix = [];
    arr.forEach(element => {
        element = element.split(' ');
        matrix.push(element);
    });
    
    let index = matrix.length - 1;
    let leftDiagonalSum = 0;
    let rigthDiagonalSum = 0;

    matrix.forEach((arr, i) => {
        leftDiagonalSum += Number(arr[i]);
        rigthDiagonalSum += Number(arr[index--]);
    })

    if (leftDiagonalSum === rigthDiagonalSum) {
        index = matrix.length - 1;

        matrix.forEach((arr, i) => {
            arr.forEach((el, j) => {
                if (j !== i && j !== index) {
                    matrix[i][j] = leftDiagonalSum;
                }
            })
            index--;
        });
    }

    matrix.forEach(el => console.log(el.join(' ')));
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']

)