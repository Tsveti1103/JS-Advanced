function editElement(element,stringMatch,replacer) {
    const pattern = new RegExp(stringMatch,'g')
    element.textContent =  element.textContent.replace(pattern,replacer)
}