function cars(input) {
    let result = {}
    function create(carName, key, value) {
        if (key != 'inherit') {
            result[carName] = {}
        }
        else {
            result[carName] = Object.create(result[value]);
        }
    }

    input.forEach(x => {
        const [command, name, k, v] = x.split(" ")
        switch (command) {
            case "create": create(name, k, v); break;
            case "set": result[name][k] = v; break;
            case "print":
                const entries = [];
                for (const key in result[name]) {
                    entries.push(`${key}:${result[name][key]}`);
                }
                console.log(entries.join(','));
                break;
            }

        })
}
cars(['create c1',
    'set c1 color red',
    'create c2 inherit c1',
    'set c2 model new',
    'print c1',
    'print c2']
)