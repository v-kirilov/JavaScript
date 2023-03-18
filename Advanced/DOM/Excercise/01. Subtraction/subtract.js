function subtract() {
    let firstElement = document.getElementById('firstNumber');
    let secondElement = document.getElementById('secondNumber');
    let sumElement = document.getElementById('result');

    sumElement.textContent = Number(firstElement.value) -  Number(secondElement.value)

}