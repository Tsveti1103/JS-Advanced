function solve(n,m){
    small = Math.min(n,m);
    for(let num = small;num>0;num--){
        if (m%num == 0 && n%num==0){
            console.log(num)
            break
        }
    }
}
solve(15,5)
solve(500,1500)
solve(2154,458)