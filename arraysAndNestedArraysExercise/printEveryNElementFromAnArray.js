function printByStep(arr,step){
    newArr = []
    for(let i =0;i<arr.length;i+=step){
        newArr.push(arr[i])
    }
    return newArr
}
printByStep(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)