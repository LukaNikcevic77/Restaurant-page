export {StyleMenu};


const soup = document.createElement('h1');
const tea = document.createElement('p');
const image = document.createElement('img');
const line1 = document.createElement('img');
const line2 = document.createElement('img');
function StyleMenu(ambis) {
  line1.setAttribute('src', '/design photos and restourant images/Vector 1.svg');
  line1.setAttribute('id', 'Line-1');
  line2.setAttribute('src', '/design photos and restourant images/Vector 2.svg');
  line2.setAttribute('id', 'Line-2');

  soup.classList.add('Soup');
  soup.textContent = 'SOUP 25$';
  tea.classList.add('Tea');
  tea.textContent = 'Tea 5$';
  image.classList.add('img_2');
  image.setAttribute('src', '/design photos and restourant images/Menu.jpeg');


  AppendMenu(ambis);
}

function AppendMenu(ambis) {
  ambis.appendChild(image);
  ambis.appendChild(soup);
  ambis.appendChild(tea);
  ambis.appendChild(line1);
  ambis.appendChild(line2);
}

