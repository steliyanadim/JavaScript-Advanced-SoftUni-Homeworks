function addItem() {
    const text = document.querySelector('#newItemText').value;
    const parentEl = document.querySelector('#items');
    
    const newEl = document.createElement('li');
    newEl.textContent = text;

    parentEl.appendChild(newEl)
}