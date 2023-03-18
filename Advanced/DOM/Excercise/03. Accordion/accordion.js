function toggle() {
    let buttonElement = document.querySelector('.button');
    let divElement = document.querySelector('#extra');
    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        divElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        divElement.style.display = 'none';
    }

}