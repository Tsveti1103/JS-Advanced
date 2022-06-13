// with object

// function juice(arr) {
//     let bottles = {};
//     let juices = {};
//     for (let i of arr) {
//         let [name, quantity] = i.split(' => ');
//         quantity = Number(quantity);
//         if (!juices[name]) {
//             juices[name] = 0;
//         }
//         juices[name] += quantity;
//         if (juices[name] >= 1000) {
//             if (!bottles[name]) {
//                 bottles[name] = 0;
//             }
//             let bottle = Math.floor(juices[name] / 1000);
//             juices[name] -= bottle * 1000;
//             bottles[name] += bottle;
//         }
//     }
//     for (let [name, quantity] of Object.entries(bottles)) {
//         console.log(`${name} => ${quantity}`)
//     }

// }

// with map
function juice(arr) {
    let bottles = new Map();
    let juices = new Map();
    for (let i of arr) {
        let [name, quantity] = i.split(' => ');
        quantity = Number(quantity);
        if (!juices.has(name)) {
            juices.set(name, 0);
        }
        quantity += juices.get(name);
        juices.set(name, quantity)
        if (juices.get(name) >= 1000) {
            if (!bottles.has(name)) {
                bottles.set(name, 0);
            }
            let bottle = Math.floor(juices.get(name) / 1000);
            quantity = juices.get(name) % 1000;
            juices.set(name, quantity)
            bottle += bottles.get(name);
            bottles.set(name, bottle);
        }
    }
    for (let [name, quantity] of bottles) {
        console.log(`${name} => ${quantity}`);
    }
}


juice(['Orange => 2000',
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)
juice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)