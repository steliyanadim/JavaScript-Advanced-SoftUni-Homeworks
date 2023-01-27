function sortBy2Criteria(arr) {
    let result = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    })
        .join('\n');
        console.log(result);
}
sortBy2Criteria(['alpha',
    'beta',
    'gamma']
)