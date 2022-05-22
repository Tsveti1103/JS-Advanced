function slove(n,m){
    small = Math.min(n,m);
    for(let num = small;num>0;num--){
        if (m%num == 0 && n%num==0){
            console.log(num)
            break
        }
    }
}
slove(15,5)
slove(500,1500)
slove(2154,458)