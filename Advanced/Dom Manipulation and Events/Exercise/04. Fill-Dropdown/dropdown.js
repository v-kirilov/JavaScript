function addItem() {
    let textInput = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');
    let menuElement = document.getElementById('menu');
    console.log(textInput.value);
    console.log(itemValue.value);
    let opt = document.createElement('option');
    opt.textContent = textInput.value;
    opt.value = itemValue.value;

    if (textInput.value !== '' && itemValue.value !== '') {
        menuElement.appendChild(opt);
    }

    itemValue.value = '';
    textInput.value = '';
}