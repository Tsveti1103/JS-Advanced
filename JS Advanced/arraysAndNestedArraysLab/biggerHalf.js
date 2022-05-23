function biggerHalf(arr){
    arr.sort((a,b) =>a-b)
    let result = arr.slice(-Math.ceil(arr.length/2))
    console.log(result)
}
biggerHalf([3, 19, 14, 7, 2, 19, 6])