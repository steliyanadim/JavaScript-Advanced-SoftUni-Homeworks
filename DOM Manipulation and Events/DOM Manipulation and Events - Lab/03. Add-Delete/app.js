function addItem() {
    const text = document.querySelector('#newItemText').value;
    const parentEl = document.querySelector('#items');

    const newEl = document.createElement('li');
    newEl.textContent = text;

    const deleteBttn = document.createElement('a');
    deleteBttn.href = '#';
    deleteBttn.textContent = '[Delete]';

    newEl.appendChild(deleteBttn);
    parentEl.appendChild(newEl);

    deleteBttn.addEventListener('click', deleteEl);

    function deleteEl(event) {
        newEl.remove()
    }
}