function listProcessor(data) {
    let state = []

    function add(string) {
        state.push(string)
    }
    function remove(string) {
        state = state.filter(s => s != string);
    }
    function print() {
        console.log(state.join(','))
    }

    for (let command of data) {
        [func, str] = command.split(' ')
        switch (func) {
            case 'add': add(str); break;
            case 'remove': remove(str); break
            case 'print': print(); break
        }
    }

}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])