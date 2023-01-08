function equalNeighbors(matrix) {
    let pairsCounter = 0;
    let arrLength = matrix[0].length;

    matrix.forEach(arr => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                pairsCounter++;
            }
        }
    });

    for (let j = 0; j < arrLength; j++) {
        let currentRow = [];
        matrix.forEach(arr => {
            currentRow.push(arr.shift());
        })

        for (let k = 0; k < currentRow.length; k++) {
            if (currentRow[k] === currentRow[k + 1]) {
                pairsCounter++;
            }
        }
    }
    return pairsCounter;
  
}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '5', '5', '4']]


)