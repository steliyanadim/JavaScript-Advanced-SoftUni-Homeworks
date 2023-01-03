function circleArea(arg) {
    let argType = typeof arg;
    if (argType === 'number') {
        let result = Math.pow(arg, 2) * Math.PI
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${argType}.`);
    }
}
circleArea('3')