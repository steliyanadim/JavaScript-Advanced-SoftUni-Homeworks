function pieceOfPie(flavors, startTarget, endTarget) {
    let startIndex = flavors.indexOf(startTarget);
    let endIndex = flavors.indexOf(endTarget) + 1;
    let result = flavors.slice(startIndex, endIndex);
    return result;
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')