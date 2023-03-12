function matrix(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < matrix.length; i++) {
        let currRowSum = matrix[i].reduce((a, b) => a + b);
        if (currRowSum !== sum) {
            return false;
        }

        let currColSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            currColSum += matrix[i][j];
        }
        if (currColSum !== sum) {
            return false;
        }
    }

    return true;

    // matrix.forEach(element => {
    //     rowSum.push(element.reduce((a, b) => a + b));
    // });
    // console.log(rowSum);

    // for (let i = 0; i < array.length; i++) {

    // }

}

matrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);