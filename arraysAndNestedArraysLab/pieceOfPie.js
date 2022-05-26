function pieceOfPie(arr, firstFlavor, secondFlavor) {
    return arr.slice(arr.indexOf(firstFlavor),arr.indexOf(secondFlavor)+1)
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)