function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const inputField = document.querySelector('#searchField')
      const searchedText = inputField.value
      const inputData = Array.from(document.querySelectorAll('tbody tr'))

      inputData.forEach(element => element.className = '')

      const filteredRows = inputData.filter(row => {
         const values = Array.from(row.children);

         if (values.some(td => td.textContent.includes(searchedText))) {
             row.className = 'select';
         }
     });

     inputField.value = ''
   }
}