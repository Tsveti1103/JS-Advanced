window.addEventListener('load', solve);

function solve() {
    const productType = document.getElementById('type-product');
    const description = document.getElementById('description');
    const name = document.getElementById('client-name');
    const phone = document.getElementById('client-phone');
    const sendFormBtn = document.querySelector('form button');
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click', clear)


    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');

    sendFormBtn.addEventListener('click', send)

    function createElement(type, content, className, parent) {
        let el = document.createElement(type);
        el.textContent = content;
        if (className) {
            el.classList.add(className);
        }
        if (parent) {
            parent.appendChild(el);
        }
        return el;
    }
    function send(ev) {
        if (description.value && name.value && phone.value) {
            ev.preventDefault();
            let div = createElement('div', '', 'container');
            let h2 = createElement('h2', `Product type for repair: ${productType.value}`, '', div);
            let h3 = createElement('h3', `Client information: ${name.value}, ${phone.value}`, '', div);
            let h4 = createElement('h4', `Description of the problem: ${description.value}`, '', div);
            let startBtn = createElement('button', 'Start repair', 'start-btn', div);
            let finishBtn = createElement('button', 'Finish repair', 'finish-btn', div);
            finishBtn.disabled = true;
            receivedOrders.appendChild(div);
            startBtn.addEventListener('click', start);
            description.value = '';
            name.value = '';
            phone.value = '';
        }
    }
    function start(ev) {
        ev.target.disabled = true;
        let finishBtn = ev.target.nextSibling;
        finishBtn.disabled = false;
        finishBtn.addEventListener('click', finish);
    }
    function finish(ev) {
        let div = ev.target.parentElement;
        let [btn1, btn2] = div.querySelectorAll('button');
        btn1.remove();
        btn2.remove();
        completedOrders.appendChild(div);
    }
    function clear(ev) {
        let divEls = ev.target.parentElement.querySelectorAll('.container');
        for (let div of divEls) {
            div.remove();
        }
    }
}