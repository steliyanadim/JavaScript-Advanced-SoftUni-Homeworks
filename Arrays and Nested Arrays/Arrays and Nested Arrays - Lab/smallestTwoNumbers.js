function smallestTwoNumbers(numbers) {
    let sortedNumbers = numbers.sort((a,b) => a - b);
    let result = sortedNumbers[0] + ' ' + sortedNumbers[1];
    console.log(result);
}
smallestTwoNumbers([30, 15, 50, 5])