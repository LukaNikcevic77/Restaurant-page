export {StyleContact};


const Owner = document.createElement('h1');
const Chief = document.createElement('h1');
const OwnerName = document.createElement('h1');
const ChiefName = document.createElement('h1');
const tel1 = document.createElement('p');
const tel2 = document.createElement('p');
const mail1 = document.createElement('p');
const mail2 = document.createElement('p');
const Line1 = document.createElement('div');
const Line2 = document.createElement('div');
const footer = document.createElement('footer');
const footerText = document.createElement('h1');
const githubIcon = document.createElement('i');
function StyleContact(ambis) {
  ambis.classList.add('makeFlex');
  Owner.classList.add('Owner');
  Owner.textContent = 'Owner';

  Chief.classList.add('Chief');
  Chief.textContent = 'Chief';

  OwnerName.classList.add('OwnerName');
  OwnerName.textContent = 'Luka Nikcevic';

  ChiefName.classList.add('ChiefName');
  ChiefName.textContent = 'Matsuo Momoko';

  tel1.classList.add('phoneNum');
  tel1.textContent = 'tel: +382 69 546 321';

  tel2.classList.add('phoneNum');
  tel2.textContent = 'tel: +382 69 248 622';

  mail1.classList.add('mailCont');
  mail1.textContent = 'mail: nikcevic.luka77@gmail.com';

  mail2.classList.add('mailCont');
  mail2.textContent = 'mail: thelittlepeach.23@gmail.com';

  Line1.classList.add('verticalLine');
  Line2.classList.add('verticalLine');

  githubIcon.classList.add('fa-brands');
  githubIcon.classList.add('fa-github');

  footerText.textContent = 'Copyrigth Ⓒ 2023 LukaNikcevic77';


  AppendMenu(ambis);
}

function AppendMenu(ambis) {
  ambis.appendChild(Owner);
  ambis.appendChild(Line1);
  ambis.appendChild(OwnerName);
  ambis.appendChild(tel1);
  ambis.appendChild(mail1);

  ambis.appendChild(Chief);
  ambis.appendChild(Line2);
  ambis.appendChild(ChiefName);
  ambis.appendChild(tel2);
  ambis.appendChild(mail2);

  document.body.appendChild(footer);
  footer.appendChild(footerText);
  footerText.appendChild(githubIcon);


  document.body.appendChild(footer);
}

