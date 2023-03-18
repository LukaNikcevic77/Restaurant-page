export {StyleMenu};
import Vector1 from '../design_photos_and_restourant_images/Vector1.svg';
import Vector2 from '/design_photos_and_restourant_images/Vector2.svg';
import Menu from '/design_photos_and_restourant_images/Menu.jpeg';
const soup = document.createElement('h1');
const tea = document.createElement('p');
const image = new Image();
const line1 = new Image();
const line2 = new Image();
function StyleMenu(ambis) {
  line1.src = Vector1;
  line1.setAttribute('id', 'Line-1');
  line2.src = Vector2;
  line2.setAttribute('id', 'Line-2');

  soup.classList.add('Soup');
  soup.textContent = 'SOUP 25$';
  tea.classList.add('Tea');
  tea.textContent = 'Tea 5$';
  image.classList.add('img_2');
  image.src = Menu;


  AppendMenu(ambis);
}

function AppendMenu(ambis) {
  ambis.appendChild(image);
  ambis.appendChild(soup);
  ambis.appendChild(tea);
  ambis.appendChild(line1);
  ambis.appendChild(line2);
}

