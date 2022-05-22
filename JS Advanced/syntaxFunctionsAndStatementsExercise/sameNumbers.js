function solve(num){
    let theSame = true;
    let sum =0;
    for(let i = 0; i < String(num).length; i++){
        num = String(num)
        if(num[0] != num[i])
            theSame = false;
            
    }
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(theSame);
    console.log(sum);
   
}

solve(2222222);
solve(1234);
solve(5);