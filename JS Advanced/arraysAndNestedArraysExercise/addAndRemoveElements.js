function addOrRemove(input){
    let arr = []
    for (let i =0; i <input.length; i++){
        if(input[i]=='add'){
            arr.push(i+1)
        }
        else if(input[i]=='remove'){
            arr.pop()
        }
    }
    if (arr.length==0){
        arr.push('Empty')
    }
    console.log(arr.join('\n'))
}
addOrRemove(['remove', 
'remove', 
'remove']

)