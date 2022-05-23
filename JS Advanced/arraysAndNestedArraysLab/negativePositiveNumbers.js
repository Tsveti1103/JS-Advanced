function negativePositiveNumbers(arr){
    let result = []
    for(let i of arr){
        if(i>=0){
            result.push(i)
        }
        else{
            result.unshift(i)
        }
    }
    console.log(result)
}
negativePositiveNumbers([3, -2, 0, -1])