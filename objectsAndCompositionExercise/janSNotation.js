function notation(arr) {
    let numbers = [];
    error = false;
    while (arr.length>0) {
        currentInstruction = arr.shift();
        if (!isNaN(currentInstruction)) {
            numbers.push(currentInstruction);
        }
        else {
            if (numbers.length < 2) {
                console.log("Error: not enough operands!")
                error = true;
                break
            } else {
                let result;
                let second = numbers.pop()
                let first = numbers.pop()
                switch (currentInstruction) {
                    case '+': 
                    result = first + second;
                    break;
                    case '-':
                        result = first - second;
                        break;
                    case '*':
                        result = first * second;
                        break;
                    case '/': 
                    result = first / second;
                    break;
                }
                numbers.push(result);
            }

        }
    }
    if (numbers.length > 1) {
        console.log("Error: too many operands!")

    } else if (numbers.length == 1 && !error) {
        console.log(numbers[0]);
    }
}

notation([15,
    '/']
   
   
)
notation([5,
    3,
    4,
    '*',
    '-']
   )

