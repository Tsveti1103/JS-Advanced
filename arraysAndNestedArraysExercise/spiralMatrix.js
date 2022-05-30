function spiral(row, col) {
    let matrix = []
    let maxNum = row * col
    let middle = Math.floor(row / 2)
    for (let i = 0; i < row; i++) {
        matrix.push(Array(col).fill(0))
    }
    matrix[middle][middle] = maxNum
    let cRow = middle
    let cCol = middle
    for (let i = 1; i < row; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % 2 == 1) {
                maxNum--;
                cCol--
                matrix[cRow][cCol] = maxNum

            }
            else {
                maxNum--;
                cCol++
                matrix[cRow][cCol] = maxNum

            }

        }
        for (let k = 1; k <= i; k++) {
            if (i % 2 == 1) {

                maxNum--;
                cRow++;
                matrix[cRow][cCol] = maxNum
            }
            else {

                maxNum--;
                cRow--
                matrix[cRow][cCol] = maxNum
            }

        }
    }
    for (let m = row - 2; m >= 0; m--) {
        maxNum--;
        cCol--
        matrix[cRow][cCol] = maxNum
    }
    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '))
    }
}

spiral(5,5)

