function create(input) {
   let contentElement = document.getElementById('content');
   for (const word of input) {
      let divElement = document.createElement('div');
      let parElement = document.createElement('p');
      parElement.textContent = word;
      parElement.style.display = 'none';
      contentElement.appendChild(divElement);
      divElement.appendChild(parElement);

      divElement.addEventListener('click',function (e){
         e.currentTarget.children[0].style.display='block';
         console.log(e.currentTarget);
      });
   }
}