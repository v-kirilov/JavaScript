function search() {
   let userWord = document.getElementById('searchText').value;
   let townsElements = Array.from(document.querySelectorAll('#towns li'));
   let matchElement = document.getElementById('result');
   let count =0;

   for (const town of townsElements) {
      if (town.textContent.includes(userWord) && userWord!=='') {
         count++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   matchElement.textContent=`${count} matches found`;
}
