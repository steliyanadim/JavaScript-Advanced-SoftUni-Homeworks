function printAnArrayWithAGivenDelimiter(arr, connector) {
    let result = arr.join(connector);
    console.log(result);
}
printAnArrayWithAGivenDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)