function validate() {
    let pattern = /[a-z]+@[a-z]+.[a-z]+/
    let textArea = document.getElementById('email')
    textArea.addEventListener('change', check);
    function check() {
        if (pattern.test(textArea.value)) {
            textArea.classList.remove('error')
            textArea.value = ''
        }
        else {
            textArea.classList.add('error')
        }
    }
}