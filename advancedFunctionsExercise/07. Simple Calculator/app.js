function calculator() {
    let fild1 = null;
    let fild2 = null;let result = null;
    function init(f1, f2, fr) {
        fild1 = document.querySelector(f1);
        fild2 =  document.querySelector(f2);
        result =  document.querySelector(fr);
    }
    function add(){
        result.value = Number(fild1.value) + Number(fild2.value);
    }
    function subtract(){
        result.value = Number(fild1.value) - Number(fild2.value);
    }
    return{ 
        init,
        add,
        subtract
    }
}





