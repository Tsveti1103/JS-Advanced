function game(turns) {
    let matrix = [];
for (let i = 0; i < 3; i++) {
    matrix.push(['false', 'false', 'false'])
}
    let nobodyWins = true
    let winner = ''
    function winTheGame(r, c, m) {
        let win = false;
            if ((m[0][c] != 'false' && m[0][c] == m[1][c] && m[1][c] == m[2][c]) || (m[r][0]!= 'false' && m[r][0] == m[r][1] && m[r][1] == m[r][2])) {
                win = true;
            }
        if ((m[1][1] != 'false' && m[1][1] == m[0][0] && m[0][0] == m[2][2]) || (m[1][1]!= 'false' && m[1][1] == m[0][2] && m[0][2] == m[2][0])) {
            win = true;
        }
        return win
    }
    let movesCount = 1
    while (turns.length>0) {
        let currentMove = turns.shift();
        let row = Number(currentMove[0])
        let col = Number(currentMove[2])
        if (matrix[row][col] != 'false') {
            if(turns.length>0){
                console.log("This place is already taken. Please choose another!")
            }
            else{
                break
            }
        }
        else {
            if (movesCount % 2 != 0) {
                matrix[row][col] = 'X'
                movesCount += 1
                if (winTheGame(row, col, matrix)) {
                    nobodyWins = false
                    winner = 'X'

                    break
                }
            }
            else {
                matrix[row][col] = 'O'
                movesCount += 1
                if (winTheGame(row, col, matrix)) {
                    nobodyWins = false
                    winner = 'O'
                    break
                }

            }

        }
    }
    if (nobodyWins) {
        console.log("The game ended! Nobody wins :(")
    }
    else {
        console.log(`Player ${winner} wins!`)
    }
    for (let row of matrix) {
        console.log(row.join('\t'))

    }
}


game(["0 1","0 1"]

)