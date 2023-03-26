function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');

    let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)'); //CSS selector!
    let resuleElement = document.getElementById('result')

    // for (const tdElement of emailCellElements) {
    //     console.log(tdElement.textContent);
    // }

    let emailElements = Array.from(emailCellElements); //Ако искаме да го превърнем в масив иначе е NodeList
    let targeEleemnt = emailElements.find(x=>x.textContent == inputElement.value);

    //Сега да изтрием целия parent node.
    if (targeEleemnt) {
        
        targeEleemnt.parentNode.remove();
        resuleElement.textContent='Deleted.'
    }else {
        resuleElement.textContent='Not found.'
    }
}