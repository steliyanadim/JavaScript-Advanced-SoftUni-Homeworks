function validityChecker(x1, y1, x2, y2) {
    let distance1 = validator(x1, y1, 0, 0);
    let distance2 = validator(0, 0, x2, y2);
    let distance3 = validator(x1, y1, x2, y2);

    function validator(x1, y1, x2, y2) {
        let result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return result;
    }

    Number.isInteger(distance1) ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    Number.isInteger(distance2) ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    Number.isInteger(distance3) ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)