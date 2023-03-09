function solve(area, vol, input) {

    const cordinates = JSON.parse(input);
    const result = [];

    cordinates.map(cord => {
        result.push({
            area: area.call(cord),
            volume: vol.call(cord)
        })
    })
    return result
}
solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )


function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};

// [
//     { area: 2, volume: 20 },
//     { area: 49, volume: 490 },
//     { area: 10, volume: 100 }
//   ]
  