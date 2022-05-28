function rectangle(width, height, color) {
    color = color[0].toUpperCase() + color.substring(1);
    console.log(color);
    result = {
        width,
        height,
        color,
        calcArea() {
            return this.width * this.height
        }
    }
    return result
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
let rect1 = rectangle(3, 2, 'red');
console.log(rect1.width);
console.log(rect1.height);
console.log(rect1.color);
console.log(rect1.calcArea());
