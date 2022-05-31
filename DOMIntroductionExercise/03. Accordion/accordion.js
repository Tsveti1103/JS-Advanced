function toggle() {
    let currentButton = document.getElementsByClassName('button')[0]
    let text = document.getElementById('extra')

    if (currentButton.textContent == 'More') {
        currentButton.textContent = 'Less'
        text.style.display = 'block'
    }
    else {
        currentButton.textContent = 'More'
        text.style.display = 'none'
    }
}

