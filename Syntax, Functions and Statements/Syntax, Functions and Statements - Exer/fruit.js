function fruits(type, weigthInGr, pricePerKg) {
    let weigthInKg = weigthInGr / 1000;
    let price = weigthInKg * pricePerKg;

    console.log(`I need $${price.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${type}.`);
}
fruits('orange', 2500, 1.80)