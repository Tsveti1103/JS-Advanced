function rotation(arr,count){
    for(let i = 1;i<=count;i++){
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '));
}
rotation(['1', 
'2', 
'3', 
'4'], 
2

)