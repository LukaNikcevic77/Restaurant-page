export {StyleHome, AppendHome};

const contentHolder = document.querySelector("#content");

const title = document.createElement('h1');
const description = document.createElement('p');
const image = document.createElement('img');

function StyleHome(ambis){
console.log("Hej mico");
title.classList.add('Title');
title.textContent = "情熱";
description.classList.add('desc');
description.textContent = "Delivering the hearth of Japan is the mission we feel passionate about!";
image.classList.add('img_1');
image.setAttribute("src", "/restourantBigger.jpeg");
image.setAttribute("srcset", "/restourantBigger.jpeg");

AppendHome(ambis);


}

function AppendHome(ambis){
    
    console.log(ambis);
    ambis.appendChild(title);
    console.log(title);
    ambis.appendChild(description);
    ambis.appendChild(image);
}

