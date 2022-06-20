window.addEventListener('load', solution);

function solution() {
  const nameInp = document.getElementById('fname');
  const emailInp = document.getElementById('email');
  const numberInp = document.getElementById('phone');
  const addressInp = document.getElementById('address');
  const codeInp = document.getElementById('code');
  const submitBtn = document.getElementById('submitBTN');
  const infoPreview = document.getElementById('infoPreview');
  submitBtn.addEventListener('click', submit);

  function createElement(type, content, elClass) {
    let el = document.createElement(type)
    el.textContent = content
    if (elClass) {
      el.classList.add(elClass)
    }
    return el
  }



  function appendAllChild(el, arr) {
    for (let child of arr) {
      el.appendChild(child)
    }
    return el
  }

  function submit(ev) {
    ev.preventDefault();
    const name = nameInp.value;
    const email = emailInp.value;
    const number = numberInp.value;
    const address = addressInp.value;
    const code = codeInp.value;
    if (name == "" || email == '') {
      return;
    }
    let liName = createElement('li', `${nameInp.previousElementSibling.textContent} ${name}`)
    let liEmail = createElement('li', `${emailInp.previousElementSibling.textContent} ${email}`)
    let liNumber = createElement('li', `${numberInp.previousElementSibling.textContent} ${number}`)
    let liAddress = createElement('li', `${addressInp.previousElementSibling.textContent} ${address}`)
    let liCode = createElement('li', `${codeInp.previousElementSibling.textContent} ${code}`)

    const editBtn = document.getElementById('editBTN')
    const continueBtn = document.getElementById('continueBTN')
    editBtn.disabled = false
    continueBtn.disabled = false
    submitBtn.disabled = true

    nameInp.value = ''
    emailInp.value = ''
    numberInp.value = ''
    addressInp.value = ''
    codeInp.value = ''

    appendAllChild(infoPreview, [liName, liEmail, liNumber, liAddress, liCode])
    editBtn.addEventListener('click', edit)
    continueBtn.addEventListener('click', finish)
    function edit(ev) {
      ev.preventDefault()
      nameInp.value = name;
      emailInp.value = email;
      numberInp.value = number;
      addressInp.value = address;
      codeInp.value = code;
      infoPreview.innerHTML = ''

      editBtn.disabled = true
      continueBtn.disabled = true
      submitBtn.disabled = false
    }

    function finish(ev) {
      ev.preventDefault();
      let el = document.getElementById('block')
      el.innerHTML = '<h3>Thank you for your reservation!</h3>'
    }
  }
}
