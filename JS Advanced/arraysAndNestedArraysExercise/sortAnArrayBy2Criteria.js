function sortArr(arr){
    arr.sort((a,b)=>{
        if (a.length != b.length){
            return  a.length - b.length
        }
        return a.localeCompare(b)
    })
    return arr.join('\n')
}
console.log(sortArr(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

))