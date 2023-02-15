function addItem() {
    const itemText = document.querySelector('#newItemText');
    const itemValue = document.querySelector('#newItemValue');

    const newItem = document.createElement('option');
    newItem.textContent = itemText.value;
    newItem.value = itemValue.value;

    const menu = document.querySelector('#menu');
    menu.appendChild(newItem);

    itemText.value = '';
    itemValue.value = '';
}