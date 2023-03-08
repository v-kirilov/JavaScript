function sumFirstLast(inputArr) {
    let firstNumber = Number(inputArr.shift());
    let finalElement = Number(inputArr.pop()) || 0;  // Ако масива има само един елемент , това може да върне 0 за да не е NaN и така целия output да е NaN!

    console.log(firstNumber + finalElement);
}

sumFirstLast(['20', '30', '40'])