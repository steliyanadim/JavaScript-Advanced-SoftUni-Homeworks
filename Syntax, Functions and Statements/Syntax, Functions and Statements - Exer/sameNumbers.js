function sameNumbers(number) {
    let numberAsString = number.toString();
    let firstChar = numberAsString[0];
    let result = Number(firstChar);
    let isTheSame = true;
    for (let i = 1; i < numberAsString.length; i++) {
        if (numberAsString[i] !== firstChar) {
            isTheSame = false;
        }
        result += Number(numberAsString[i]);
    }
    isTheSame ? console.log('true') : console.log('false');
    console.log(result);
}
sameNumbers(1234)