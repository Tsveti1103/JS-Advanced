// function createElement(type,content,elClass){
//     let el = document.createElement(type)
//     el.textContent = content
//     if(elClass){
//       el.classList.add(elClass)
//     }
//     return el
//   }



//   function appendAllChild(el, arr) {
//     for (let child of arr) {
//       el.appendChild(child)
//     }
//     return el
//   }



// sort ul with li elements by li.textContent
// Array.from(listUl.children).sort((a, b)=>(a.textContent).localeCompare(b.textContent)).forEach(li => listUl.appendChild(li))

// if  all products in this.products don't contain the product
// if (!productsList.every(product => this.products.includes(product))) {
//     throw new Error('We do not have this product');
// }