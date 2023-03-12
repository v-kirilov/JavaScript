function ticTacToe(input) {
    let matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let isWinner = '';
    let move = [];
    let round = 0;
    let player = 'X';
    while (input.length > 0) {
        move.push(input.shift().split(' ').map(Number));
        let x = move[round][0];
        let y = move[round][1];

        if (matrix[x][y] !== false) {
            console.log('This place is already taken. Please choose another!');
            round++;

        } else {
            matrix = makeMove(matrix, x, y, player);

            
            isWinner = checkWinner(matrix);
            if (player ==='X') {
                player ='O';
            }else {
                player ='X';
            }
            round++;
        }

        if (isWinner === 'X' || isWinner === 'O') {
            console.log(`Player ${isWinner} wins!`);
            for (let i = 0; i < matrix.length; i++) {
                console.log(matrix[i].join('\t'));
            }
            return;
        }
    }
    console.log(`The game ended! Nobody wins :(`);
            for (let i = 0; i < matrix.length; i++) {
                console.log(matrix[i].join('\t'));
            }
}

function makeMove(matrix, x, y, player) {

    if (player ==='X') {

        matrix[x][y] = player;

    } else {
        matrix[x][y] = player;
    }
    return matrix;
};

function checkWinner(matrix) {
    if (matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
        return matrix[1][1];
    } else if (matrix[0][matrix[0].length] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
        return matrix[1][1];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2]) {
            return matrix[i][0];
        } else if (matrix[0][i] === matrix[1][i] && matrix[0][i] === matrix[2][i]) {
            return matrix[0][i];
        }
    }
};


ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]

);