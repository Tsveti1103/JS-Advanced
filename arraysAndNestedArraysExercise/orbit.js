function orbit(arr) {
    matrix = []
    let [rows, columns, row, col] = arr
    for (let i = 0; i < rows; i++) {
        matrix.push(Array(columns).fill(0))
    }
    matrix[row][col] = 1
    for (let r = 0; r<rows; r++) {
        for(let c = 0; c<columns; c++) {
            a = Math.max(Math.abs(r-row),Math.abs(c-col))+1
            matrix[r][c] = a
        }
    }
   
    for (row in matrix) {
        console.log(matrix[row].join(' '))
    }
    
}

orbit([4, 4, 0, 0])
orbit([5, 5, 2, 2])
