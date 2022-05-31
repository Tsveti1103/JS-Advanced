function solve() {
  let result = ''
  let text = document.getElementById('text').value;
  text = text.toLowerCase()
  let words = text.split(' ')
  let textConverter =  document.getElementById('naming-convention').value;
  if(textConverter =='Camel Case'){
    result += words[0]
    for(let i = 1; i < words.length; i++){
      words[i].charAt(0).toUpperCase()
      result+=words[i]
    }
  }
  else if(textConverter == 'Pascal Case'){
    // result += map()
    for(let i = 0; i < words.length; i++){
      words[i].charAt(0).toUpperCase()
      result+= words[i]
    }
  }
  else{
    result = 'Error!'
  }

   document.getElementById('result').textContent = result
} 