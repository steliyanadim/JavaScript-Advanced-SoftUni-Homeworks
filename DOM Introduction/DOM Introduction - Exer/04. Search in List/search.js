function search() {
   const towns = document.querySelectorAll('#towns li')
   const value = document.querySelector('#searchText').value
   let counter = 0;
   document.querySelector('#result').textContent = '';

   for (const town of towns) {

      if (town.textContent.includes(value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++
      }
   }
   document.querySelector('#result').textContent = `${counter} matches found`
}
