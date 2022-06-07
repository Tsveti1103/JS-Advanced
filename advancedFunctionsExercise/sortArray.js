// function sortArray(arr, command) {
//     if (command == 'asc') {
//         arr.sort((a, b) => a - b);
//     } else {
//         arr.sort((a, b) => b - a);
//     }
//     return arr
// }

// function sortArray(arr, command) {
//     const metods = {
//         asc: (a, b) => a - b,
//         desc: (a, b) => b - a
//     }
//     arr.sort(metods[command]);
//     return arr
// }

function sortArray(arr, command) {
    return arr.sort((a, b) => (command == 'asc'? a - b: b - a))
}



console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))