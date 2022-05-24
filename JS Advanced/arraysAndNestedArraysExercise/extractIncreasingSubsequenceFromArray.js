// v1 with for

function extract(arr) {
    result = []
    currentNum = Number.MIN_SAFE_INTEGER
    for (let i of arr) {
        if (i >= currentNum) {
            result.push(i)
            currentNum = i
        }
    }
    return result
}

// v2 with filter

function extract(arr) {
    let biggest = Number.MIN_SAFE_INTEGER
    let result = arr.filter((el) => {
        if (el >= biggest) {
            biggest = el;
            return true;
        }
        return false;
    })
    return result
}

// v3 with forEach


function extract(arr) {
    result = []
    biggest = Number.MIN_SAFE_INTEGER
    arr.forEach((el) => {
        if (el >= biggest) {
            result.push(el)
            biggest = el;
        }
    })
    return result
}
// v4 with reduce

function extract(arr) {
    result = []
    biggest = Number.MIN_SAFE_INTEGER
    arr.reduce((accumulated, current) => {
        if (current >= biggest) {
            accumulated.push(current)
            biggest = current
        }
        return accumulated
    }, result)
    return result
}
extract([1,
    3,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)