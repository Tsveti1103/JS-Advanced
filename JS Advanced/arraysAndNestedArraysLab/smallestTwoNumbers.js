// function smallestTwoNumbers(arr){
//     let first = arr.splice(arr.indexOf(Math.min(...arr)),1)
//     let second = arr.splice(arr.indexOf(Math.min(...arr)),1)
//     console.log(first.join(),second.join())
// }


function smallestTwoNumbers(arr){
    arr.sort((a,b) =>a-b)
    console.log(arr[0],arr[1])
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])