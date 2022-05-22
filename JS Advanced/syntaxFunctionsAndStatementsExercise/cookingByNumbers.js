function solve(num, ...params) {
    num = Number(num);
    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x*3;
    let fillet = x => (0.8*x).toFixed(1);
    for (let i = 0; i < params.length; i++) {
        switch(params[i]) {
            case 'chop':
                num = chop(num)
                console.log(num);
                break
             case 'dice':
                num = dice(num)
                console.log(num);
                break
             case 'spice':
                num = spice(num)
                console.log(num);
                break
             case 'bake':
                num = bake(num)
                console.log(num);
                break
             case 'fillet':
                num = fillet(num)
                console.log(num);
                break
             
            }
    }

}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')