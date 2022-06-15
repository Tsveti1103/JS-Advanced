function solve() {
    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');
    let ulListMails = document.getElementById('list')
    let ulSendList = document.getElementsByClassName('sent-list')[0]
    let trash = document.getElementsByClassName('delete-list')[0]
    resetBtn.addEventListener('click', reset);
    addBtn.addEventListener('click', add);
    function reset(ev) {
        ev.preventDefault();
        recipient.value = '';
        title.value = '';
        message.value = '';
    }
    function createElement(type, content, id, className) {
        let el = document.createElement(type);
        if (content) { el.textContent = content; }
        if (id) { el.id = id; }
        if (className) { el.classList.add(className) }
        return el;
    }
    function appendAllChild(el, arr) {
        for (let child of arr) {
            el.appendChild(child);
        }
        return el;

    }
    function add(ev) {
        if (recipient.value && title.value && message.value) {
            ev.preventDefault();
            let li = createElement('li');
            let h4Title = createElement('h4', `Title: ${title.value}`);
            let h4Name = createElement('h4', `Recipient Name: ${recipient.value}`);
            let span = createElement('span', message.value);

            let div = createElement('div', '', 'list-action');
            let sendBtn = createElement('button', 'Send', 'send');
            let deleteBtnOne = createElement('button', 'Delete', 'delete');

            div = appendAllChild(div, [sendBtn, deleteBtnOne])
            li = appendAllChild(li, [h4Title, h4Name, span, div])
            ulListMails.appendChild(li);
            recipient.value = '';
            title.value = '';
            message.value = '';

            sendBtn.addEventListener('click', send);
            deleteBtnOne.addEventListener('click', deleteTxt);
        }
        function createLI(el) {
            let liEl = el.parentElement.parentElement
            let elements = liEl.children;
            let toValue = elements[1].textContent.slice(15)
            let titleValue = elements[0].textContent

            let li = document.createElement('li')
            let spanTo = createElement('span', `To: ${toValue}`)
            let spanTitle = createElement('span', titleValue)
            li = appendAllChild(li, [spanTo, spanTitle])

            return [li, liEl]
        }
        function send(ev) {
            let [li, liEl] = [...createLI(ev.target)]
            let div = createElement('div', '', '', 'btn')

            let deleteBtnTwo = createElement('button', 'Delete', '', 'delete')
            div.appendChild(deleteBtnTwo)
            li.appendChild(div)
            ulSendList.appendChild(li)
            liEl.remove()
            deleteBtnTwo.addEventListener('click', deleteTxt)
        }
        function deleteTxt(ev) {
            if (ev.target.id == 'delete') {
                let [li, liEl] = [...createLI(ev.target)]
                liEl.remove()
                trash.appendChild(li)
            }
            if (ev.target.className == 'delete') {
                li = ev.target.parentElement.parentElement
                let div = li.getElementsByTagName('div')[0]
                div.remove()
                trash.appendChild(li)
            }
        }
    }
}
solve()