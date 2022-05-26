function slove(nums){
    // resSum = nums.reduce((a, b) => a + b, 0);
    let resSum=0;
    let resInverse = 0;
    let resConcatenate = '';
    for(let i=0;i<nums.length;i++){
        resSum+=nums[i]
        resInverse+=1/nums[i]
        resConcatenate+=String(nums[i])
    }
    console.log(resSum);
    console.log(resInverse);
    console.log(resConcatenate);
}
slove([1, 2, 3])
slove([2, 4, 8, 16])
// const sum = [1, 2, 3].reduce(add, 0)