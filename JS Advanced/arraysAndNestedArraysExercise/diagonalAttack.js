function diagonal(strings) {
    let diagonalOneSum = 0
    let diagonalTwoSum = 0
    let matrix = []
    let result = []
    for (let i = 0; i < strings.length; i++) {
        matrix.push(strings[i].split(' '))
    }
    let c = matrix.length - 1;
    for (let r = 0; r < matrix.length; r++) {
        diagonalOneSum += Number(matrix[r][r])
        diagonalTwoSum += Number(matrix[r][c])
        c--;
    }
    if (diagonalOneSum == diagonalTwoSum) {
        let col = matrix.length - 1;
        for (let r = 0; r < matrix.length; r++) {
            let firstNum = Number(matrix[r][r])
            let secondNum = Number(matrix[r][col])
            matrix[r].fill(diagonalOneSum)
            matrix[r][r] = firstNum
            matrix[r][col] = secondNum
            col--;
        }
    }
    for(row of matrix){
        console.log(row.join(' '))
    }
}


diagonal(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)