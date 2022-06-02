function addItem() {
    let input = document.getElementById('newItemText')
    let newLi = document.createElement('li')
    newLi.textContent = input.value;
    document.getElementById('items').appendChild(newLi)
    input.value = ''
}