function focused() {
    Array.from(document.querySelectorAll('input'))
    .forEach(a=>{
        a.addEventListener('focus',onFocus);
        a.addEventListener('blur',onBlur);
    });
    function onFocus(ev) {
       ev.target.parentElement.className = 'focused';
    //    ev.target.parentElement.classList.add('focused'); add class
    }
    function onBlur(ev){
       ev.target.parentElement.className = '';

    }
}