function solve() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let addWorkerBtn = document.getElementById('add-worker');

    let tbody = document.getElementById('tbody');
    let sum = document.getElementById('sum');
    addWorkerBtn.addEventListener('click', addWorker);

    function createElement(type, content, className, id) {
        let el = document.createElement(type);
        el.textContent = content;
        if (className) { el.classList.add(className); };
        if (id) { el.id = id; }
        return el;
    }
    function clearText(arr, text, type) {
        for (el of arr) {
            el.value = '';
        }
    }
    function appendAllChild(el, arr) {
        for (child of arr) { el.appendChild(child); }
        return el;
    }
    function addWorker(ev) {
        ev.preventDefault()
        if (firstName.value !=='' && lastName.value!=='' && email.value!=='' && birth.value!=='' && position.value!=='' && salary.value!=='') {
            let tr = document.createElement('tr');

            let td1 = createElement('td', firstName.value);
            let td2 = createElement('td', lastName.value);
            let td3 = createElement('td', email.value);
            let td4 = createElement('td', birth.value);
            let td5 = createElement('td', position.value);
            let td6 = createElement('td', salary.value);

            let td7 = document.createElement('td');
            let fireBtn = createElement('button', 'Fired', 'fired');
            let editBtn = createElement('button', 'Edit', 'edit');
            td7 = appendAllChild(td7, [fireBtn, editBtn]);
            tr = appendAllChild(tr, [td1, td2, td3, td4, td5, td6, td7])
            tbody.appendChild(tr)
            sum.textContent = (Number(sum.textContent) + Number(salary.value)).toFixed(2);

            clearText([firstName, lastName, email, birth, position, salary])
            editBtn.addEventListener('click', edit);
            fireBtn.addEventListener('click', fire);
        }
    }
    function edit(ev) {
        ev.preventDefault()
        let elements = ev.target.parentNode.parentNode.children
        firstName.value = elements[0].textContent;
        lastName.value = elements[1].textContent;
        email.value = elements[2].textContent;
        birth.value = elements[3].textContent;
        position.value = elements[4].textContent;
        salary.value = elements[5].textContent;
        sum.textContent = (Number(sum.textContent) - Number(elements[5].textContent)).toFixed(2);
        ev.target.parentNode.parentNode.remove()
    }
    function fire(ev) {
        let salary = ev.target.parentNode.parentNode.children[5]

        sum.textContent = (Number(sum.textContent) - Number(salary.textContent)).toFixed(2);
        ev.target.parentElement.parentElement.remove()
    }
}
solve()