function extract(content) {
    const text = document.getElementById(content).textContent
    const pattern = /\(.+?\)/g;
    let result=''
    let match = pattern.exec(text)
    
    while(match) {
        result += match[0] + ';'
        match = pattern.exec(text)
    }
    
    return result
}