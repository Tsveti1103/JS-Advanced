function search() {
   let text = document.getElementById('searchText').value;
   let towns = document.querySelectorAll('#towns li')
   let result = 0
   for (let town of towns) {
      town.style.fontWeight = 'normal'
      town.style.textDecoration = ''
   }

   for (let town of towns) {
      if (town.textContent.includes(text)) {
         result++;
         town.style.fontWeight = 'bold'
         town.style.textDecoration = 'underline'
      }
      document.getElementById('result').textContent = `${result} matches found`
   }
}