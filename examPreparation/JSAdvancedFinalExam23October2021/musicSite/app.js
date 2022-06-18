window.addEventListener('load', solve);

function solve() {
    let inputs = Array.from(document.querySelectorAll('.container-text form input'))
    let addBtn = document.getElementById('add-btn')
    let songsCollection = document.getElementsByClassName('all-hits-container')[0]
    let savedSongs = document.getElementsByClassName('saved-container')[0]
    let likes = document.querySelector('#total-likes .likes p')
    addBtn.addEventListener('click', add)

    function createElement(type, content, className) {
        let el = document.createElement(type);
        el.textContent = content;
        if (className) { el.classList.add(className) }
        return el;
    }
    function appendAllChild(el, arr) {
        for (let child of arr) {
            el.appendChild(child)
        }
        return el
    }
    function add(ev) {
        ev.preventDefault()
        if (inputs.every(i => i.value)) {
            let div = createElement('div', '', 'hits-info');
            let img = document.createElement('img');
            img.src = './static/img/img.png'
            let h2Genre = createElement('h2', `Genre: ${inputs[0].value}`)
            let h2Name = createElement('h2', `Name: ${inputs[1].value}`)
            let h2Author = createElement('h2', `Author: ${inputs[2].value}`)
            let h3Date = createElement('h3', `Date: ${inputs[3].value}`)
            let saveBtn = createElement('button', 'Save song', 'save-btn')
            let likeBtn = createElement('button', 'Like song', 'like-btn')
            let deleteBtn = createElement('button', 'Delete', 'delete-btn')

            songsCollection.appendChild(div)
            div = appendAllChild(div, [img, h2Genre, h2Name, h2Author, h3Date, saveBtn, likeBtn, deleteBtn])
            saveBtn.addEventListener('click', save);
            likeBtn.addEventListener('click', like);
            deleteBtn.addEventListener('click', deleteSong);
            for (let input of inputs) {
                input.value = ''
            }
        }
    }
    function like(ev) {
        ev.preventDefault()
        value = Number(likes.textContent.slice(12)) + 1;
        likes.textContent = likes.textContent.slice(0, 13) + value
        ev.target.disabled = true;
    }
    function deleteSong(ev) {
        div = ev.target.parentElement
        div.remove()
    }
    function save(ev) {
        let div = ev.target.parentElement
        div.children[5].remove()
        div.children[5].remove()
        savedSongs.appendChild(div)
    }
}
