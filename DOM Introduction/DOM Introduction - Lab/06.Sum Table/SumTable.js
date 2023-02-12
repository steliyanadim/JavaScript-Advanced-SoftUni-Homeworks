function sumTable() {
    const elements = document.querySelectorAll('table tr');
    let result = 0;
    for (let i = 1; i < elements.length; i++) {
        result += Number(elements[i].children[1].textContent);
    }
    document.getElementById('sum').textContent = result;
}