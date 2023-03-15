export {StyleStuff};

const contentHolder = document.getElementById('content');

const title = document.createElement('h1');
const description = document.createElement('p');
const image = document.createElement('img');

function StyleStuff(){
console.log(contentHolder);
contentHolder.classList.remove("makeFlex");
title.classList.add('Title');
title.textContent = "情熱";
description.classList.add('desc');
description.textContent = "Delivering the hearth of Japan is the mission we feel passionate about!";
image.classList.add('img_1');
image.setAttribute("src", "/restourantBigger.jpeg");
image.setAttribute("srcset", "/restourantBigger.jpeg");

AppendStuff();


}

function AppendStuff(){

    contentHolder.appendChild(title);
    contentHolder.appendChild(description);
    contentHolder.appendChild(image);
}

