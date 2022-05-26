function slove(x){
    if (typeof x == 'number'){
        let result = Math.PI *x*x
        console.log(result.toFixed(2))
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof x}.`)
    }

}
slove("asd")
slove(5)

