function evenPositionElement(elements) {
    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (i % 2 === 0) {
            result.push(elements[i]);
        }
    }
    console.log(result.join(' '));
}
evenPositionElement(['20', '30', '40', '50', '60'])
evenPositionElement(['5', '10'])