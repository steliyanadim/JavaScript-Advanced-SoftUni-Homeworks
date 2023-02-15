function deleteByEmail() {
    const email = document.querySelector('[name="email"]').value;
    const rows = document.querySelectorAll('table tbody tr');
    let isDeleted = false;

    for (const row of rows) {
        if (row.children[1].textContent === email) {
            row.innerText = '';
            isDeleted = true;
            break;
        }
    }

    isDeleted ? document.querySelector('#result').textContent = 'Deleted.' : document.querySelector('#result').textContent = 'Not found.';
}