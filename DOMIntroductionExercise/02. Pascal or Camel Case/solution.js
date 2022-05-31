function solve() {
  let result = ''
  let text = document.getElementById('text').value;
  text = text.toLowerCase()
  let words = text.split(' ')
  let textConverter = document.getElementById('naming-convention').value;
  if (textConverter == 'Camel Case') {
    result += words[0]
    for (let i = 1; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].substring(1);
    }
  }
  else if (textConverter == 'Pascal Case') {
    for (let i = 0; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].substring(1);
    }
  }
  else {
    result = 'Error!'
  }

  document.getElementById('result').textContent = result
} 