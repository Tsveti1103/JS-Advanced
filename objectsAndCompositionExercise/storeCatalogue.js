function storeCatalogue(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    result = {}
    for (let i = 0; i < arr.length; i++) {
        let [name, price] = arr[i].split(' : ')
        let letter = name[0]
        if (!result[letter]) {
            result[letter] = {}
        }
        result[letter][name] = price;
    }
    let letters = Object.keys(result)
    for (let i = 0; i < letters.length; i++) {
        let keys = Object.keys(result[letters[i]]);
        let values = Object.values(result[letters[i]]);
        console.log(letters[i]);
        for (let j = 0; j < keys.length; j++) {
            console.log(`  ${keys[j]}: ${values[j]}`)
        }

    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)