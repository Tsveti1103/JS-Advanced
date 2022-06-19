window.addEventListener('load', solve);

function solve() {
    const modelInp = document.getElementById('model');
    const descriptionInp = document.getElementById('description');
    const yearInp = document.getElementById('year');
    const priceInp = document.getElementById('price');

    const addBtn = document.getElementById('add');
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
        let model = modelInp.value;
        let description = descriptionInp.value;
        let year = yearInp.value;
        let price = priceInp.value;
        if (model == '' || description == '' || year == '' || price == '' || price < 0 || year < 0) {
            return;
        }
        let tBody = document.getElementById('furniture-list')
        const trEl = createElement('tr', '', 'info')
        const tdModel = createElement('td', model)
        const tdPrice = createElement('td', Number(price).toFixed(2))
        const tdBtns = createElement('td')
        const moreBtn = createElement('button', 'More Info', 'moreBtn')
        const buyBtn = createElement('button', 'Buy it', 'buyBtn')

        appendAllChild(tdBtns, [moreBtn, buyBtn])
        appendAllChild(trEl, [tdModel, tdPrice, tdBtns])

        const trHide = createElement('tr', '', "hide")
        const tdYear = createElement('td', `Year: ${year}`)
        const tdDescription = createElement('td', `Description: ${description}`)
        tdDescription.setAttribute("colspan", "3");

        appendAllChild(trHide, [tdYear, tdDescription])
        appendAllChild(tBody, [trEl, trHide])

        modelInp.value = ''
        descriptionInp.value = ''
        yearInp.value = ''
        priceInp.value = ''

        moreBtn.addEventListener('click', more)
        buyBtn.addEventListener('click', buy)
        function more(ev) {
            ev.preventDefault();
            if (ev.target.textContent == 'More Info') {
                ev.target.textContent = 'Less Info'
                trHide.style.display = 'contents'
            } else if (ev.target.textContent == 'Less Info') {
                ev.target.textContent = 'More Info'
                trHide.style.display = 'none'
            }
        }
        function buy(ev) {
            ev.preventDefault();
            const totalPrice = document.getElementsByClassName('total-price')[0]
            totalPrice.textContent = (Number(totalPrice.textContent) + Number(price)).toFixed(2);
        }

    }

}
