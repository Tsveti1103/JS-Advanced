// function encodeAndDecodeMessages() {
//     let [firstBtn, secondBtn] = document.querySelectorAll('#main div button')
//     let [firstText, secondText] = document.querySelectorAll('#main div textarea')


//     firstBtn.addEventListener('click', encode);
//     secondBtn.addEventListener('click', decode);
//     function encode() {
//         let encodeTxt = '';
//         for (char of firstText.value) {
//             encodeTxt += String.fromCharCode(char.charCodeAt(0) + 1);
//         }
//         secondText.value = encodeTxt;
//         firstText.value = ''
//     }
//     function decode() {
//         let decodeTxt = '';
//         for (a of secondText.value) {
//             decodeTxt += String.fromCharCode(a.charCodeAt(0) - 1);
//         }
//         secondText.value = decodeTxt;
//     }

// }


function encodeAndDecodeMessages() {
    let [firstBtn, secondBtn] = document.querySelectorAll('#main div button')
    let [firstTextArea, secondTextArea] = document.querySelectorAll('#main div textarea')

    firstBtn.addEventListener('click', encodeDecod);
    secondBtn.addEventListener('click', encodeDecod);

    function encodeDecod() {
        let currentTextArea;
        currentTextArea = firstTextArea.value != '' ? firstTextArea.value : secondTextArea.value
        let text = ''
        for (char of currentTextArea) {
            if (currentTextArea == firstTextArea.value) {
                text += String.fromCharCode(char.charCodeAt(0) + 1);
            }
            else {
                text += String.fromCharCode(char.charCodeAt(0) - 1);
            }
        }
        secondTextArea.value = text;
        firstTextArea.value = ''

    }
}