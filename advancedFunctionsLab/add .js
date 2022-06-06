function solution(n){
    function add(num){
        return num +n;
    }
    return add
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
