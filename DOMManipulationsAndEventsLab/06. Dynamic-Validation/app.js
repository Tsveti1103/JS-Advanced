function validate() {
    const input = document.getElementById('email')
    input.addEventListener('change', isValid);
    function isValid() {
        const pattern = /\b[a-z]+@[a-z]+\.[a-z]+$/
        if (!input.value.match(pattern)) {
            input.classList.add('error')
        }
        else {
            input.classList.remove('error')

        }
    }

}