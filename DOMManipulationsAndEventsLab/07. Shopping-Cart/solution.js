function solve() {
   output = document.getElementsByTagName('textarea')[0]
   let sum = 0;
   let products = [];
   Array.from(document.querySelectorAll('.add-product')).forEach(button => { button.addEventListener('click', addItem); });
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkOut);
   function addItem(ev) {
      const product = ev.target.parentElement.parentElement;
      const productName = product.getElementsByClassName('product-title')[0].textContent;
      const productPrice = Number(product.getElementsByClassName('product-line-price')[0].textContent);
      sum += productPrice;
      output.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      if (!products.includes(productName)) {
         products.push(productName)
      }

   }
   function checkOut() {
      output.value += (`You bought ${products.join(', ')} for ${sum.toFixed(2)}.`)
      Array.from(document.getElementsByTagName('button')).forEach(button => { button.disabled = true });

   }


}