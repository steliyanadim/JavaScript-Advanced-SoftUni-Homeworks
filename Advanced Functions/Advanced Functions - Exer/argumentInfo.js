function solve() {
    const dataTypes = {};
    const input = [...arguments].forEach(arg => {
        const curType = typeof arg;

        if (!dataTypes.hasOwnProperty(curType)) {
            dataTypes[curType] = 0;
        }

        ++dataTypes[curType];
        console.log(`${curType}: ${arg}`);
    })
    const result = Object.entries(dataTypes)
        .sort((a, b) => b[1] - a[1])
        .forEach(type => console.log(`${type[0]} = ${type[1]}`));
}
solve('cat', 42, function () { console.log('Hello world!'); });