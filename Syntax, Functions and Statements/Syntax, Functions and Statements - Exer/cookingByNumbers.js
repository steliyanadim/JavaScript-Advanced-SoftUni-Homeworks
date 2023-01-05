function cookingByNumbers(startPoint, ...commands) {
    let number = Number(startPoint);
    for (let command of commands) {
        switch (command) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number *= 0.80; break;
        }
        console.log(number);
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')