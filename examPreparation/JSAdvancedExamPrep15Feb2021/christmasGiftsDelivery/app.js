function solution() {
    const [sectionAdd, sectionList, sectionSend, sectionDiscarded] = document.querySelectorAll('.card');
    const nameInp = sectionAdd.querySelector('div input');
    const listUl = sectionList.querySelector('ul');
    const sendUl = sectionSend.querySelector('ul');
    const discardedUl = sectionDiscarded.querySelector('ul');
    const addBtn = sectionAdd.querySelector('div button');
    addBtn.addEventListener('click', add)

    function createElement(type, content, elClass, elId) {
        let el = document.createElement(type)
        el.textContent = content
        if (elClass) {
            el.classList.add(elClass)
        }
        if (elId) {
            el.id = elId
        }
        return el
    }

    function appendAllChild(el, arr) {
        for (let child of arr) {
            el.appendChild(child)
        }
        return el
    }

    function add(event) {
        event.preventDefault();
        let name = nameInp.value;
        let li = createElement('li', name, 'gift');
        let sendBtn = createElement('button', 'Send', '', 'sendButton');
        let discardBtn = createElement('button', 'Discard', '', 'discardButton');
        appendAllChild(li, [sendBtn, discardBtn]);
        listUl.appendChild(li);
        Array.from(listUl.children).sort((a, b) => (a.textContent).localeCompare(b.textContent)).forEach(li => listUl.appendChild(li));
        nameInp.value = '';
        sendBtn.addEventListener('click', send);
        discardBtn.addEventListener('click', discard);

        function send(event) {
            event.preventDefault();
            sendBtn.remove()
            discardBtn.remove()
            sendUl.appendChild(li)
        }
        function discard(event) {
            event.preventDefault();
            sendBtn.remove()
            discardBtn.remove()
            discardedUl.appendChild(li)
        }
    }
}
