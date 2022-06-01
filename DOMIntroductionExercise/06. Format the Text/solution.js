// function solve() {
//   let input = document.getElementsByTagName('textarea')[0].value;
//   let output = document.getElementById('output');
//   let text = input.split('.').filter(s => s.length != 0)
  
//   while(text.length>0) {
//     let content = text.splice(0,3).join('.') + '.'
//     let p = document.createElement('p');
//     p.textContent = content;
//     output.appendChild(p);
//   }
 
// }


function solve() {
  let text = document.getElementsByTagName('textarea')[0].value.split('.').filter(s => s.length != 0);
  let output = document.getElementById('output');

  while(text.length>0) {
    let p = document.createElement('p');
    p.textContent = text.splice(0,3).join('.') + '.';
    output.appendChild(p);
  }
 
}