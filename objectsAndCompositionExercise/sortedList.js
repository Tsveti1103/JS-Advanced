function createSortedList() {
    let result = {
        numbers: [],
        size: 0,
        add(element) {
            this.numbers.push(element);
            this.numbers.sort((a, b) => a - b);
            this.size += 1

        },
        remove(index) {
            if (index >= 0 && index < this.numbers.length) {
                this.numbers.splice(index, 1);
                this.size -= 1

            }

        },
        get(index) {
            return this.numbers[index];
        }

    };

    return result;

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);

