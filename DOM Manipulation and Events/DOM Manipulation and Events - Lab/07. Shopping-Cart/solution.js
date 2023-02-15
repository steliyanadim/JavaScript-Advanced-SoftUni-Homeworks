function solve() {
   const addButtons = Array.from(document.querySelectorAll('.product .product-add .add-product'))
   const checkoutButton = document.querySelector('.checkout')
   const items = [];
   let text = ''
   let sum = 0;


   addButtons.map(button => button.addEventListener('click', addProduct))

   checkoutButton.addEventListener('click', checkout)

   function addProduct(event) {

      const selectedItem = event.target
      const parentEl = selectedItem.closest('.product')
      const price = parentEl.querySelector('.product-line-price').textContent
      const item = parentEl.querySelector('.product-details .product-title').textContent

      text += `Added ${item} for ${Number(price).toFixed(2)} to the cart.\n`
      sum += Number(price)

      if (!items.includes(item)) {
         items.push(item)
      }

      document.querySelector('textarea').value = text;

   }

   function checkout() {
      text += `You bought ${items.join(', ')} for ${sum.toFixed(2)}.`
      document.querySelector('textarea').value = text;
      disabledButtons()
   }

   function disabledButtons(){
      for (const button of addButtons) {
         button.setAttribute("disabled", "true");
      }
      checkoutButton.setAttribute("disabled", "true")
   }

}
