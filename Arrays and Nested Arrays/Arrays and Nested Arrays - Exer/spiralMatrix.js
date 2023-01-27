function spiralMatrix(a,b){
    const result = []
    const curRow = []
    let counter = 1;
        for(let i = 0; i<a; i++){
            const curRow = []
            for(let j = 0; j<a; j++){
                curRow.push(counter++)
            }
            result.push(curRow)
        }
        console.log(result[1]);
}
spiralMatrix(3,3)