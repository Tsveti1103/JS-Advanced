function solve(x1,y1,x2,y2) {
    function findStatus(x){
        let status
        if ((Number.isInteger(x))){
            status = 'valid'
        }else{
            status = 'invalid'
        }
        return status
    }
    let firstDistance = Math. sqrt((0-x1)**2 + (0-y1)**2)
    console.log(`{${x1}, ${y1}} to {${0}, ${0}} is ${findStatus(firstDistance)}`)
    
    let secondDistance = Math. sqrt((0-x2)**2 + (0-y2)**2)
    console.log(`{${x2}, ${y2}} to {${0}, ${0}} is ${findStatus(secondDistance)}`)

    let thirdDistance = Math. sqrt((x2-x1)**2 + (y2-y1)**2)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${findStatus(thirdDistance)}`)
}
solve(3, 0, 0, 4)
solve(2, 1, 1, 1)