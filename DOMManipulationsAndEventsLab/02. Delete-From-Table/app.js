function deleteByEmail() {
    let value = document.querySelector('input[name="email"]').value;
    const rows = Array.from(document.querySelectorAll('tbody tr'))
    let found = false;
    for (let row of rows) {
        if (row.children[1].textContent == value) {
            row.parentElement.removeChild(row)
            found = true;
            break;
        }
    }
    document.getElementById('result').textContent = found ? 'Deleted.' : 'Not found.'
}