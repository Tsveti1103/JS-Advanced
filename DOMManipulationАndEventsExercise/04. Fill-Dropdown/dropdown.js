function addItem() {
    const newText = document.getElementById('newItemText');
    const newValue = document.getElementById('newItemValue');
    const parent = document.getElementById('menu');
    let optElement = document.createElement('option');
    optElement.value = newValue.value;
    optElement.textContent = newText.value;
    parent.appendChild(optElement);
    newText.value = '';
    newValue.value = '';
}