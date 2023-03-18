import {StyleMenu} from './menu';
import {StyleContact} from './contact';
import {StyleHome, AppendHome} from './home';
import './css/style.css'
const goHome = document.getElementById('n1');
const goMenu = document.getElementById('n2');
const goCont = document.getElementById('n3');

const container = document.getElementById('content');
const newContainer = document.createElement('div');
newContainer.classList.add('contentt');
newContainer.setAttribute('id', 'content');


container.remove();
newContainer.innerHTML = '';

document.body.appendChild(newContainer);
makeChange('home');

goHome.addEventListener('click', (e) => {
  const footer = document.querySelector('footer');
  if (footer != undefined) {
    footer.remove();
  }

  newContainer.innerHTML = '';
  newContainer.classList.remove('makeFlex');
  document.body.appendChild(newContainer);
  makeChange('home');
});

goMenu.addEventListener('click', (e) => {
  const footer = document.querySelector('footer');
  if (footer != undefined) {
    footer.remove();
  }
  newContainer.innerHTML = '';
  newContainer.classList.remove('makeFlex');
  document.body.appendChild(newContainer);
  makeChange('menu');
});

goCont.addEventListener('click', (e) => {
  const footer = document.querySelector('footer');
  if (footer != undefined) {
    console.log(footer);
  }
  newContainer.innerHTML = '';
  newContainer.classList.remove('makeFlex');
  document.body.appendChild(newContainer);
  makeChange('contact');
});

function makeChange(change) {
  switch (change) {
    case 'home':

      StyleHome(newContainer);
      break;
    case 'menu':
      StyleMenu(newContainer);
      break;
    case 'contact':
      StyleContact(newContainer);
      break;
  }
}

