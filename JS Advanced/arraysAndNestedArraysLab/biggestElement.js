// function biggestElement(matrix) {
//     let maxNums = Number.MIN_VALUE
//     for (let array of matrix) {
//         let currentMax = Math.max(...array)
//         if (currentMax > maxNums) {
//             maxNums = currentMax
//         }

//     }
//     return maxNums
// }

function biggestElement(matrix) {
    let result = []
    for (let array of matrix) {
        
        result.push(...array)
    }
    maxNums = Math.max(...result)
    return maxNums
}

biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])
