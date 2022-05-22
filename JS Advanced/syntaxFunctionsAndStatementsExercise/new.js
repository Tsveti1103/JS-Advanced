function solve(x1, y1, x2, y2) {
 
    let distanceCheck;
 
    function checkValidDistance(point1x, point1y, point2x, point2y) {
        let distance;
        distance = Math.sqrt((point2x - point1x)**2 + (point2y - point1y)**2);
        return distance;
    }
    
    distanceCheck = checkValidDistance(x1, y1, 0, 0);
    if (Number.isInteger(distanceCheck)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
 
    distanceCheck = checkValidDistance(x2, y2, 0, 0);
    if (Number.isInteger(distanceCheck)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    distanceCheck = checkValidDistance(x1, y1, x2, y2);
    if (Number.isInteger(distanceCheck)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// solve(3, 0, 0, 4)
solve(2, 1, 1, 1)