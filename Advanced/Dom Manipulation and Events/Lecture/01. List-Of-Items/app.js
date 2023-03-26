function addItem() {
    let inputElement = document.getElementById('newItemText');
    let liELement = document.createElement('li');
    let itemeElement = document.getElementById('items');

    liELement.textContent = inputElement.value;
    console.log(liELement.textContent);
    itemeElement.appendChild(liELement);
}