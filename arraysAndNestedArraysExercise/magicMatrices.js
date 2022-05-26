function magicMatrices(matrix) {
    let result = true;
    if (matrix.length > 0) {
        let sum = matrix[0].reduce((a, b) => a + b);
        for (let index = 0; index < matrix.length; index++) {
            let rowSum = matrix[index].reduce((a, b) => a + b, 0) == sum ? true : false;
            let colSum = matrix.reduce((a, b) => a + b[index], 0) == sum ? true : false;
            if (rowSum == false || colSum == false) {
                result = false;
                break;
            }
        }


    }
    return result;
}

console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]
]



))