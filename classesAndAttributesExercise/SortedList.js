class List {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }
    add(element) {
        this.arr.push(element);
        this.arr = this.arr.sort((a, b) => a - b)
        this.size++
    }
    remove(index) {
        if (this.validIndex(index)) {
            this.arr.splice(index, 1)
            this.size--
        }
    }
    get(index) {
        if (this.validIndex(index)) {
            return this.arr[index];
        }
    }
    validIndex(index) {
        return index < this.size && index >= 0;
    }

}


let list = new List();
list.add(5);
list.add(3);
console.log(list.get(0));
list.add(7);
list.remove(1);
console.log(list.get(1));
