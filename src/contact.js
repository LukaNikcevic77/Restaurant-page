export {StyleContact};

const contentHolder = document.getElementById('content');
contentHolder.classList.add("makeFlex");
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
const footerText = document.createElement("h1");
const githubIcon = document.createElement("i");
function StyleContact(){
    
 Owner.classList.add("Owner");
 Owner.textContent = "Owner";

 Chief.classList.add("Chief");
 Chief.textContent = "Chief"

 OwnerName.classList.add("OwnerName");
 OwnerName.textContent = "Luka Nikcevic";

 ChiefName.classList.add("ChiefName");
 ChiefName.textContent = "Matsuo Momoko"

 tel1.classList.add("phoneNum");
 tel1.textContent = "tel: +382 69 546 321";

 tel2.classList.add("phoneNum");
 tel2.textContent = "tel: +382 69 248 622";

 mail1.classList.add("mailCont");
 mail1.textContent = "mail: nikcevic.luka77@gmail.com";

 mail2.classList.add("mailCont");
 mail2.textContent = "mail: thelittlepeach.23@gmail.com";

 Line1.classList.add("verticalLine");
 Line2.classList.add("verticalLine");

 githubIcon.classList.add("fa-brands");
 githubIcon.classList.add("fa-github");

 footerText.textContent = "Copyrigth Ⓒ 2023 LukaNikcevic77";


AppendMenu();


}

function AppendMenu(){

    contentHolder.appendChild(Owner);
    contentHolder.appendChild(Line1);
    contentHolder.appendChild(OwnerName);
    contentHolder.appendChild(tel1);
    contentHolder.appendChild(mail1);

    contentHolder.appendChild(Chief);
    contentHolder.appendChild(Line2);
    contentHolder.appendChild(ChiefName);
    contentHolder.appendChild(tel2);
    contentHolder.appendChild(mail2);

    document.body.appendChild(footer);
    footer.appendChild(footerText);
    footerText.appendChild(githubIcon);


    document.body.appendChild(footer);
}

