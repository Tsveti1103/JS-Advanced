window.addEventListener("load", solve);

function solve() {
  const makeInp = document.getElementById('make')
  const modelInp = document.getElementById('model')
  const yearInp = document.getElementById('year')
  const fuelInp = document.getElementById('fuel')
  const originalCostInp = document.getElementById('original-cost')
  const sellingPriceInp = document.getElementById('selling-price')
  const publishBtn = document.getElementById('publish')

  const offers = document.getElementById('table-body')
  const sellCars = document.getElementById('cars-list')
  const profit = document.getElementById('profit')

  publishBtn.addEventListener("click", publish)

  function createElement(type, content, elClass, elId) {
    let el = document.createElement(type)
    el.textContent = content
    if (elClass) {
      el.className = elClass
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

  function publish(ev) {
    ev.preventDefault();
    let make = makeInp.value;
    let model = modelInp.value;
    let year = yearInp.value;
    let fuel = fuelInp.value;
    let originalCost = originalCostInp.value;
    let sellingPrice = sellingPriceInp.value;
    if (make == '' || model == '' || year == '' || fuel == '' || originalCost == '' || sellingPrice == '' || originalCost > sellingPrice) {
      return
    }
    let tr = createElement('tr', '', '', 'row')
    let tdMake = createElement('td', make);
    let tdModel = createElement('td', model);
    let tdYear = createElement('td', year);
    let tdFuel = createElement('td', fuel);
    let tdPrice = createElement('td', originalCost);
    let tdNewPrice = createElement('td', sellingPrice);
    let tdButtons = createElement('td');
    let editBtn = createElement('button', 'Edit', 'action-btn edit');
    let sellBtn = createElement('button', 'Sell', 'action-btn sell');
    appendAllChild(tdButtons, [editBtn, sellBtn])
    appendAllChild(tr, [tdMake, tdModel, tdYear, tdFuel, tdPrice, tdNewPrice, tdButtons])
    offers.appendChild(tr)
    makeInp.value = ''
    modelInp.value = ''
    yearInp.value = ''
    fuelInp.value = ''
    originalCostInp.value = ''
    sellingPriceInp.value = ''
    editBtn.addEventListener('click', edit)
    sellBtn.addEventListener('click', sell)
    function edit(ev) {
      ev.preventDefault();
      makeInp.value = make
      modelInp.value = model
      yearInp.value = year
      fuelInp.value = fuel
      originalCostInp.value = originalCost
      sellingPriceInp.value = sellingPrice
      tr.remove()
    }
    function sell(ev) {
      ev.preventDefault();
      let li = createElement('li', '', 'each-list')
      let spanCar = createElement('span', `${make} ${model}`)
      let spanYear = createElement('span', year);
      let price = sellingPrice - originalCost
      let spanPrice = createElement('span', price)
      appendAllChild(li, [spanCar, spanYear, spanPrice])
      sellCars.appendChild(li)
      let res = (Number(profit.textContent) + price).toFixed(2)
      profit.textContent = `${res}`
      tr.remove()
    }
  }
}
