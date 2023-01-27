function sortingNumbers(numbers) {
    let tempArr = numbers.sort((a,b) => a-b);
    let result = [];

    while(tempArr.length !== 0){
        let tempSmallNum = tempArr.shift();
        let tempBigNum = tempArr.pop();
        result.push(tempSmallNum, tempBigNum);
    }
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,78])