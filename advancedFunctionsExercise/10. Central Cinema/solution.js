function solve() {
    const addMoveForm = document.getElementById('container')
    let [name, hall, price, onScreenBtn] = addMoveForm.children
    const screen = document.querySelector('#movies ul')
    const archiveArea = document.querySelector("#archive ul");


    onScreenBtn.addEventListener('click', addMove)


    function addMove(ev) {
        ev.preventDefault()
        if (name.value && hall.value && typeof Number(price.value) == 'number') {

            const li = document.createElement('li')
            const span = document.createElement('span')
            span.textContent = name.value;
            const strongHall = document.createElement('strong')
            strongHall.textContent = `Hall: ${hall.value}`
            const div = document.createElement('div')

            const strongPrice = document.createElement('strong')
            strongPrice.textContent = Number(price.value).toFixed(2)
            const input = document.createElement('input')
            input.placeholder = 'Tickets Sold'
            const onScreenBtn = document.createElement('button')
            onScreenBtn.textContent = 'Archive'


            li.appendChild(span)
            li.appendChild(strongHall)
            li.appendChild(div)
            div.appendChild(strongPrice)
            div.appendChild(input)
            div.appendChild(onScreenBtn)
            screen.appendChild(li)
            hall.value = ''
            name.value = ''
            price.value = ''
            onScreenBtn.addEventListener('click', archive);
        }
    }
    function archive(event) {
        const archiveBtn = event.target
        let [price, quantity] = archiveBtn.parentElement.children
        if (quantity.value != '' && typeof Number(quantity.value) == 'number') {
            let [name] = archiveBtn.parentElement.parentElement.children
            let total = Number(quantity.value) * Number(price.textContent)
            const liEl = document.createElement("li");
            liEl.innerHTML = `<span>${name.textContent}</span>
                              <strong>Total amount: ${total.toFixed(2)}</strong>
                              <button>Delete</button>`

            const button = liEl.querySelector("button");
            button.addEventListener("click", deleteEntry);

            archiveArea.appendChild(liEl);
            archiveBtn.parentElement.parentElement.remove()
        }
    }
    function deleteEntry(event) {
        event.target.parentElement.parentElement.remove()
    }

    const clearButton = archiveArea.parentElement.querySelector("button");
    clearButton.addEventListener("click", () => {
        archiveArea.innerHTML = "";
    })

}