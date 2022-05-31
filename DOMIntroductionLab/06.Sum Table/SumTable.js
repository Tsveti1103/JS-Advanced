function sumTable(){
    let sum = 0
    const rows = Array.from(document.querySelectorAll('tr')).slice(1,-1)
    for (let row of rows) {
        sum += Number(row.lastElementChild.textContent)
    }
    document.getElementById('sum').textContent = sum
}


