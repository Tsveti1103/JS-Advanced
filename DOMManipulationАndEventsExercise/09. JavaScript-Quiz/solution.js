function solve() {
  let sections = Array.from(document.getElementsByTagName('section'));
  // let answer = Array.from(document.getElementsByClassName('answer-text'));
  let result = Array.from(document.querySelectorAll('.results-inner h1'))[0]

  let question = 0;
  correctAnswer = 0;
  const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
  for (let i = 0; i < sections.length; i++) {
    let currentSection = sections[i];
    let answerOne = currentSection.children[0].children[1];
    let answerTwo = currentSection.children[0].children[2];
    answerOne.addEventListener('click', onClick);
    answerTwo.addEventListener('click', onClick);
  }
  function onClick(ev) {
    let answer = ev.target.textContent;
    sections[question].style.display = 'none';
    if (rightAnswers[question] == answer) {
      correctAnswer++;
    }
    if (sections[question + 1]) {
      sections[question + 1].style.display = 'block';
    }
    else {
      result.parentElement.parentElement.style.display = 'block';
      if (correctAnswer == rightAnswers.length) {
        result.textContent = "You are recognized as top JavaScript fan!"
      }
      else {
        result.textContent = `You have ${correctAnswer} right answers`
      }
    }

    question++;
  }
}
