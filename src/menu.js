export {StyleMenu};

const contentHolder = document.getElementById('content');

const soup = document.createElement('h1');
const tea = document.createElement('p');
const image = document.createElement('img');
const line1 = document.createElement('img');
const line2 = document.createElement('img');
function StyleMenu(){
    line1.setAttribute("src", "../Vector 1.svg");
    line1.setAttribute("id", "Line-1");
    line2.setAttribute("src", "../Vector 2.svg");
    line2.setAttribute("id", "Line-2");
console.log(contentHolder);
soup.classList.add('Soup');
soup.textContent = "SOUP 25$";
tea.classList.add('Tea');
tea.textContent = "Tea 5$";
image.classList.add('img_2');
image.setAttribute("src", "../Menu.jpeg");


AppendMenu();


}

function AppendMenu(){

    contentHolder.appendChild(image);
    contentHolder.appendChild(soup);
    contentHolder.appendChild(tea);
    contentHolder.appendChild(line1);
    contentHolder.appendChild(line2);
}

