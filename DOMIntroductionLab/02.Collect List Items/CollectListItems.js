function extractText() {
    const list = Array.from(document.getElementById('items').children)
    text = list.map(e => e.textContent).join('\n')
    document.getElementById('result').value = text
}
