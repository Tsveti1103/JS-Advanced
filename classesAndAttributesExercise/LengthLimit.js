class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
        this.result = this.innerString
    }
    increase(length) {
        this.innerLength += length;
        // this.result = this.innerString.slice(0, this.innerLength)
    }
    decrease(length) {
        // if (this.innerLength - length < 0) {
        //     this.innerLength = length;
        // }
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
        // this.result = this.innerString.slice(0, this.innerLength)
    }
    toString() {
        if (this.innerLength < this.innerString.length) {
            this.result = this.innerString.slice(0, this.innerLength) + '...'
        }
        else {
            this.result = this.innerString
        }

        return this.result;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
