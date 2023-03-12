function ticTacToe(input) {
    let matrix = [];
    while (input.length > 0) {
        matrix.push(input.shift().split(' ').map(Number));
    }

    let pDiagonal = 0;
    let sDiagonal = 0;


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const element = matrix[j];
            if (i === j) {
                pDiagonal += matrix[i][j];
            }
            if ((i + j) === (matrix[i].length - 1)) {
                sDiagonal += matrix[i][j];
            }
        }
    }

    if (pDiagonal === sDiagonal) {
        for (let index = 0; index < matrix.length; index++) {
            for (let k = 0; k < matrix[index].length; k++) {
                if (index !== k && (index + k) !== (matrix[index].length - 1)) {
                    matrix[index][k] = sDiagonal;
                }
            }

        }
    }


    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

ticTacToe(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);