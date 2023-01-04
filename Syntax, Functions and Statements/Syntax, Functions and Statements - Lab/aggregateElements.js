function aggregateElements(elements) {
    let result = 0;
    let sum = 0;
    let concat = '';

    for (let num of elements) {
        sum += num;
        concat += String(num);
        inverseSum(num);
    }

    function inverseSum(number) {
        number = 1 / number;
        result += number;
    }

    console.log(sum);
    console.log(result);
    console.log(concat);
}
aggregateElements([2, 4, 8, 16])