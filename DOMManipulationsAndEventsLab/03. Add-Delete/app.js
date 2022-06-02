function addItem() {
    const input = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    liElement.textContent = input.value;;

    const aElement = document.createElement('a');
    aElement.textContent = ('[Delete]');
    aElement.href = '#';
    liElement.appendChild(aElement);
    aElement.addEventListener('click', onDelete);

    document.getElementById('items').appendChild(liElement);
    input.value = ''
    
    function onDelete(event) {
        event.target.parentElement.remove()
    }

}


