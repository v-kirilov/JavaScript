function calc() {
    let firstElement = document.getElementById('num1');
    let secondElement = document.getElementById('num2');
    let sumElement = document.getElementById('sum');

    let sum = Number(firstElement.value)+ Number(secondElement.value);
    console.log(sum);
    sumElement.value=sum;
}
