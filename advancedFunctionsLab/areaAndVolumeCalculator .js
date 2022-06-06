// function solve(area, vol, input) {
//     const data = JSON.parse(input);
//     const result = [];
//     for(let cube of data){
//         const current = {
//             area: area.call(cube),
//             volume: vol.call(cube)
//         }
//         result.push(current);
//     }
//     return result;
// }


// using map
// function solve(area, vol, input) {
//     const data = JSON.parse(input);
//     const result = data.map(cube=>{
//         const current = {
//             area: area.call(cube),
//             volume: vol.call(cube)
//         }
//         return current;
//     });
//     return result;
// }

// function solve(area, vol, input) {
//     return JSON.parse(input).map(cube=>({
//             area: area.call(cube),
//             volume: vol.call(cube)
//         }));
// }

// lambda
(area, vol, input) => JSON.parse(input).map(cube=>({
            area: area.call(cube),
            volume: vol.call(cube)
        }));

(area,vol,`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )

function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};

