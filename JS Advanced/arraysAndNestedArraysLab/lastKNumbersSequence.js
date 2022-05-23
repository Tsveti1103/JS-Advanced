function fib(seqLength,sumElements){
    let arr = [1]
    function sum(arr){
        return arr.reduce((a,b)=>a+b,0);
        }
    for (let i = 1; i < seqLength; i++){
        if (i-sumElements>=0){
            let newArr = arr.slice((i-sumElements),i)
            arr[i] = sum(newArr);
        }else{
            arr[i] = sum(arr);
        }
            
    }
    return arr
}

fib(8,2)
