function generateReport() {
    let headRows = document.querySelectorAll('thead tr th input')
    let rows = document.querySelectorAll('tbody tr')
    let final = []
    for (let i = 0; i < rows.length; i++) {
        let result = {}
        for (let index = 0; index < headRows.length; index++) {
            if (headRows[index].checked) {
                let propertyName = headRows[index].name
                let propertyValue = rows[i].children[index].textContent
                result[propertyName] = propertyValue
                console.log(result)
            }
        }
        final.push(result)

    }
    document.getElementById('output').value = JSON.stringify(final)
    data = JSON.parse(document.getElementById('output').value)
}