function solve() { 
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(ev) {
    input = JSON.parse(document.querySelector('textarea').value);
    let table = document.getElementsByClassName('table')[0];
    for (el of input) {
      let row = table.insertRow(-1);

      let cell0 = row.insertCell(0);
      let img = document.createElement('img');
      img.src = el.img;
      cell0.appendChild(img);

      let cell1 = row.insertCell(-1);
      let p = document.createElement('p');
      p.textContent = el.name;
      cell1.appendChild(p);

      let cell2 = row.insertCell(-1);
      let p1 = document.createElement('p');
      p1.textContent = el.price;
      cell2.appendChild(p1);

      let cell3 = row.insertCell(-1);
      let p2 = document.createElement('p');
      p2.textContent = el.decFactor;
      cell3.appendChild(p2);

      let cell4 = row.insertCell(-1);
      let input = document.createElement('input');
      input.type = 'checkbox';
      cell4.appendChild(input);
    }


  }

  function buy(ev) {
    output = document.querySelectorAll('textarea')[1]
    let checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]')).filter(el => el.checked);
    let boughtFurniture = [];
    let totalPrice = 0;
    let averageDec = 0;
    for (box of checkboxes) {
      let currentRow = box.parentElement.parentElement;
      boughtFurniture.push(currentRow.children[1].children[0].textContent)
      totalPrice += Number(currentRow.children[2].children[0].textContent);
      averageDec += Number(currentRow.children[3].children[0].textContent);
    }
    averageDec = averageDec / checkboxes.length
    output.value = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDec}`
  }
  
}
