function biggerHalf(numbers){
    let sortedNumbers = numbers.sort((a,b) => a - b);
    let result = sortedNumbers.slice(sortedNumbers.length / 2)
    return result;
}
biggerHalf([4])