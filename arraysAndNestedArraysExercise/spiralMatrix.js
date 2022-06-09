function spiral(row, col) {
    let matrix = [];
    let maxNum = row * col;
    let num = 1;
    let rowStart = 0;
    let colStart = 0;
    let rowEnd = row - 1;
    let colEnd = col - 1;

    for (let i = 0; i < row; i++) {
        matrix.push(Array(col).fill(0));
    }

    while (num <= maxNum) {
        // right
        for (let c = colStart; c <= colEnd; c++) {
            matrix[rowStart][c] = num;
            num++;
        }
        rowStart++;
        // down
        for (let r = rowStart; r <= rowEnd; r++) {
            matrix[r][colEnd] = num;
            num++;
        }
        colEnd--;
        // left
        for (let c = colEnd; c >= colStart; c--) {
            matrix[rowEnd][c] = num;
            num++;
        }
        rowEnd--;
        // up
        for (let r = rowEnd; r >= rowStart; r--) {
            matrix[r][colStart] = num;
            num++;
        }
        colStart++;
    }
    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '))
    }

}

spiral(4, 4)

