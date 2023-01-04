function squareOfStars(size = 5) {
    for (let y = 0; y < size; y++) {
        let result = '*';
        for (let x = 1; x < size; x++) {
            result += ' *'
        }
        console.log(result);
    }
}
squareOfStars(6)