export {StyleHome, AppendHome};

const contentHolder = document.querySelector('#content');

const title = document.createElement('h1');
const description = document.createElement('p');
const image = document.createElement('img');

function StyleHome(ambis) {
  ;
  title.classList.add('Title');
  title.textContent = '情熱';
  description.classList.add('desc');
  description.textContent = 'Delivering the hearth of Japan is the mission we feel passionate about!';
  image.classList.add('img_1');
  image.setAttribute('src', '/design photos and restourant images/restourantBigger.jpeg');

  image.setAttribute('srcset', '/design photos and restourant images/restourantBigger.jpeg');

  AppendHome(ambis);
}

function AppendHome(ambis) {
  ambis.appendChild(title);

  ambis.appendChild(description);
  ambis.appendChild(image);
}

