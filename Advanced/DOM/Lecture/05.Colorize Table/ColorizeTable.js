function colorize() {
    // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td'); //CSS selector

    // rowElements.forEach(x =>{
    //     x.style.backgroundColor = 'teal';
    // });

    let rowELements = document.getElementsByTagName('tr'); //Връща HTML collection!

    let rowElementsArr = Array.from(rowELements); //Прави го на масив от html елементи
    rowElementsArr.forEach((x,i) => {
        if (i%2!=0) {
            x.style.backgroundColor = 'teal';
        }
    });
}