let quote = [];
const index = 0;
let textPosition = 0;
let flag = true;

function loadQuote() {
  const url = 'https://api.quotable.io/random';

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.status);
      }
    })
    .then(data => {
      quote[index] = data.author + ': "' + data.content + '"';
    })
  
}

function displayQuote() {
  if (flag) {
    loadQuote();
    quote[index] += ' ';
    flag = false;
  }

  document.getElementById('text').innerHTML = quote[index].substring(0, textPosition) + '<span>\u25AE</span>';

  if (textPosition++ != quote[index].length) {
    setTimeout('displayQuote()', 100);
  } else {
    quote[index] = ' ';
    setTimeout('displayQuote()', 3000);
    textPosition = 0;
    flag = true;
  }
}

window.addEventListener('load', displayQuote())
