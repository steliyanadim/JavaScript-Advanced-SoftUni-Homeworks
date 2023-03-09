function solution() {

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    let microEl = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0,
    }
    return function (string) {
        let [operation, element, quantity] = string.split(' ')
        quantity = Number(quantity)
        if (operation === 'restock') {
            return restock(element, quantity)
        } else if (operation === 'prepare') {
            return prepare(element, quantity)
        } else {
            return report()
        }

        function restock(element, quantity) {
            microEl[element] += quantity
            return 'Success'
        }

        function prepare(recipe, quantity) {
            const macroElCopy = Object.assign(microEl)
            for (const ingrediant in recipes[recipe]) {
                const ingrdQuantity = recipes[recipe][ingrediant] * quantity

                if (microEl[ingrediant] < ingrdQuantity) {
                    return `Error: not enough ${ingrediant} in stock`
                };
                macroElCopy[ingrediant] -= Number(ingrdQuantity)
            }
            microEl = Object.assign(macroElCopy)
            return 'Success'
        }

        function report() {
            return `protein=${microEl.protein} carbohydrate=${microEl.carbohydrate} fat=${microEl.fat} flavour=${microEl.flavour}`
        }
    }
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager('report'));// report
