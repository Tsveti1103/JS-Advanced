// function solve() { 
//   let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

//   generateBtn.addEventListener('click', generate);
//   buyBtn.addEventListener('click', buy);

//   function generate(ev) {
//     input = JSON.parse(document.querySelector('textarea').value);
//     let table = document.getElementsByClassName('table')[0];
//     for (el of input) {
//       let row = table.insertRow(-1);

//       let cell0 = row.insertCell(0);
//       let img = document.createElement('img');
//       img.src = el.img;
//       cell0.appendChild(img);

//       let cell1 = row.insertCell(-1);
//       let p = document.createElement('p');
//       p.textContent = el.name;
//       cell1.appendChild(p);

//       let cell2 = row.insertCell(-1);
//       let p1 = document.createElement('p');
//       p1.textContent = el.price;
//       cell2.appendChild(p1);

//       let cell3 = row.insertCell(-1);
//       let p2 = document.createElement('p');
//       p2.textContent = el.decFactor;
//       cell3.appendChild(p2);

//       let cell4 = row.insertCell(-1);
//       let input = document.createElement('input');
//       input.type = 'checkbox';
//       cell4.appendChild(input);
//     }


//   }

//   function buy(ev) {
//     output = document.querySelectorAll('textarea')[1]
//     let checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]')).filter(el => el.checked);
//     let boughtFurniture = [];
//     let totalPrice = 0;
//     let averageDec = 0;
//     for (box of checkboxes) {
//       let currentRow = box.parentElement.parentElement;
//       boughtFurniture.push(currentRow.children[1].children[0].textContent)
//       totalPrice += Number(currentRow.children[2].children[0].textContent);
//       averageDec += Number(currentRow.children[3].children[0].textContent);
//     }
//     averageDec = averageDec / checkboxes.length
//     output.value = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDec}`
//   }

// }


function solve() {
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'))
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  const items = [];

  function generate() {
    const data = JSON.parse(input.value);
    for (let item of data) {
      const row = document.createElement('tr');

      row.appendChild(createCol('img', item.img));
      row.appendChild(createCol('p', item.name));
      row.appendChild(createCol('p', item.price));
      row.appendChild(createCol('p', item.decFactor));
      const col5 = createCol('item');
      row.appendChild(col5)

      tbody.appendChild(row);
      items.push({
        ...item,
        isCheced

      })
      function isCheced() {
        return col5.children[0].checked
      }
    }

  }
  function buy() {
    let list = [];
    let total = 0;
    let decoration = 0;
    const bought = items.filter(i => i.isCheced());
    for (let item of bought) {
      list.push(item.name);
      total += Number(item.price);
      decoration += Number(item.decFactor);
    }
    decoration /= bought.length;

    output.value = [
      `Bought furniture: ${list.join(', ')}`,
      `Total price: ${total.toFixed(2)}`,
      `Average decoration factor: ${decoration}`
    ].join('\n')
    console.log(output.value)
  }
  function createCol(type, content) {
    const result = document.createElement('td');
    let inner;
    if (type == 'img') {
      inner = document.createElement('img');
      inner.src = content;
    }
    else if (type == 'p') {
      inner = document.createElement('p');
      inner.textContent = content;
    }
    else if (type == 'item') {
      inner = document.createElement('input')
      inner.type = 'checkbox';
    }
    result.appendChild(inner);
    return result;
  }
}