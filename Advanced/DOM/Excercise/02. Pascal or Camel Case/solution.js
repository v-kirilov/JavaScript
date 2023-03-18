function solve() {
  let textElement = document.getElementById('text').value;
  let namingElement = document.getElementById('naming-convention').value;
  let result = '';
  let resultElement = document.getElementById('result');


  if (namingElement === 'Camel Case') {
    for (let i = 0; i < textElement.length; i++) {
      if (textElement[i] === ' ') {
        result += textElement[i + 1].toUpperCase();
        i++;
      } else {
        result += textElement[i].toLowerCase()
      }
    }
  } else if (namingElement === 'Pascal Case') {
    for (let i = 0; i < textElement.length; i++) {
      if (textElement[i] === ' ') {
        result += textElement[i + 1].toUpperCase();
        i++;
      } else if (i===0) {
        result += textElement[i].toUpperCase()

      } else {
        result += textElement[i].toLowerCase()
      }
    }
  } else {
    result = 'Error!';
  }

  resultElement.textContent=result;
}