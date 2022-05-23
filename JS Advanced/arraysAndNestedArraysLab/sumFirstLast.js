function sumFirstLast(arr){
    console.log(Number(arr.pop()) + Number(arr.shift()))
    return Number(arr.pop()) + Number(arr.shift());
}
sumFirstLast(['20', '30', '40'])