function validate() {
    const usernameArea = document.getElementById('username');
    const emailArea = document.getElementById('email');
    const passwordArea = document.getElementById('password');
    const confirmPasswordArea = document.getElementById('confirm-password');
    const companyArea = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const button = document.getElementById('submit');
    const validArea = document.getElementById('valid');

    const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    const passwordPattern = /^[\w]{5,15}$/;
    const emailPattern = /(.*)@(.*){1,}\.(.*){1,}/

    button.addEventListener('click', valid);
    companyArea.addEventListener('change', check);
    let checked;
    let incorrect = [];
    function check() {
        if (companyArea.checked) {
            companyInfo.style.display = 'block';
            checked = true;
        } else {
            companyInfo.style.display = 'none';
            checked = false;
        }
    }

    function valid(event) {
        event.preventDefault()
        if (!usernamePattern.test(usernameArea.value)) {
            incorrect.push(usernameArea);
        };
        if (!passwordPattern.test(passwordArea.value) || passwordArea.value !== confirmPasswordArea.value) {
            incorrect.push(passwordArea);
        };
        if (!passwordPattern.test(confirmPasswordArea.value) || passwordArea.value !== confirmPasswordArea.value) {
            incorrect.push(confirmPasswordArea);
        };
        if (!emailPattern.test(emailArea.value)) {
            incorrect.push(emailArea);
        }
        if (checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                incorrect.push(companyNumber);
            }
        }
        for (area of incorrect) {
            area.style.borderColor = 'red';
        }
        if (incorrect.length == 0) {
            validArea.style.display = 'block';
        }
    }


}
