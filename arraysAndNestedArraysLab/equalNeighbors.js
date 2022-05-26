function equalNeighbors(matrix) {

    result = 0
    function haveNeighbors(r, c, m) {
        let res = 0
        if ((r<m.length-1 && matrix[r][c] === matrix[r + 1][c])) {
            res = 1
        }
        if(c<m[r].length && matrix[r][c] === matrix[r][c + 1]){
            res = 1
        }
        return res
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            result += haveNeighbors(row,col,matrix)
        }
    }
    console.log(result)
}
equalNeighbors([['2','2'],
                ['2','2']]

)