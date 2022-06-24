function solve() {
    const taskEl = document.getElementById('task');
    const descriptionEl = document.getElementById('description');
    const dateEl = document.getElementById('date');
    const addBtn = document.getElementById('add');

    const sections = document.querySelectorAll('section');
    const openSection = sections[1].querySelectorAll('div')[1];
    const inProgresSection = sections[2].querySelectorAll('div')[1];
    const completeSection = sections[3].querySelectorAll('div')[1];

    addBtn.addEventListener('click', add)

    function createElement(type, content, elClass) {
        let el = document.createElement(type)
        el.textContent = content
        if (elClass) {
            el.classList.add(elClass)
        }
        return el
    }

    function appendAllChild(el, arr) {
        for (let child of arr) {
            el.appendChild(child)
        }
        return el
    }

    function add(ev) {
        ev.preventDefault();
        let task = taskEl.value;
        let description = descriptionEl.value;
        let date = dateEl.value;
        if (task == '' || description == '' || date == '') {
            return;
        }
        let article = document.createElement('article')
        let h3 = createElement('h3', task);
        let pDescription = createElement('p', `Description: ${description}`)
        let pDate = createElement('p', `Due Date: ${date}`)

        let divBtns = createElement('div', '', 'flex');
        let startBtn = createElement('button', 'Start', 'green');
        let deleteBtn = createElement('button', 'Delete', 'red')
        appendAllChild(divBtns, [startBtn, deleteBtn])
        appendAllChild(article, [h3, pDescription, pDate, divBtns])
        openSection.appendChild(article)
        taskEl.value = '';
        descriptionEl.value = '';
        dateEl.value = '';
        startBtn.addEventListener('click', start);
        deleteBtn.addEventListener('click', deleteArticle)

        function start(ev) {
            ev.preventDefault();
            startBtn.remove()
            let finishBtn = createElement('button', 'Finish', 'orange')
            divBtns.appendChild(finishBtn)
            inProgresSection.appendChild(article)
            finishBtn.addEventListener('click', finish)

        }

        function finish(ev) {
            ev.preventDefault();
            divBtns.remove();
            completeSection.appendChild(article)
        }
        function deleteArticle(ev) {
            ev.preventDefault();
            ev.target.parentElement.parentElement.remove()
        }
    }
}