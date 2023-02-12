function generateReport() {
    const columns = Array.from(document.querySelectorAll('table thead tr th'))
    const rows = Array.from(document.querySelectorAll('table tbody tr'))
    let finalResult = []
    const indexes = []

    columns.forEach((col, i) => {

        if (col.children[0].checked) {
            indexes.push(i)
        }

    })

    rows.forEach(row => {
        const result = {}

        for (const i of indexes) {
            const group = columns[i].textContent.toLowerCase().trim()
            result[group] = row.children[i].textContent
        }

        finalResult.push(result)
    })
    document.querySelector('#output').value = JSON.stringify(result)


}