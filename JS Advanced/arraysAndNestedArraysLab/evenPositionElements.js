function evenPosition(arr){
    let result = []
    for(let i=0; i <arr.length; i+=2){
        result.push(arr[i])
    }
     console.log(result.join(' '))
}
evenPosition(['5', '10'])