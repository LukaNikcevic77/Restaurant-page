import { StyleMenu } from "./menu";
import { StyleContact } from "./contact";
import { StyleHome, AppendHome} from "./home";

const goHome = document.getElementById("n1");
const goMenu = document.getElementById("n2");
const goCont = document.getElementById("n3");

const container = document.getElementById("content");
const newContainer = document.createElement("div");
newContainer.classList.add("contentt");
newContainer.setAttribute("id", "content");

container.remove();
        newContainer.innerHTML = '';
        document.body.appendChild(newContainer);
        makeChange("home");

goHome.addEventListener('click', (e) => {
    console.log("Udji u switch");
        container.remove();
        newContainer.innerHTML = '';
        document.body.appendChild(newContainer);
        makeChange("home");
       

});

goMenu.addEventListener('click', (e) => {

    container.remove();
    newContainer.innerHTML = '';
    document.body.appendChild(newContainer);
    makeChange("menu");

});

goCont.addEventListener('click', (e) => {

    container.remove();
    newContainer.innerHTML = '';
    document.body.appendChild(newContainer);
    makeChange("contact");

})

function makeChange(change) {
    
    switch(change) {
        case "home":
            console.log("Usli u switch");
            StyleHome(newContainer);
            break;
        case "menu":
            StyleMenu(newContainer);
            break;
        case "contact":
            StyleContact(newContainer);
            break;
        
    }
}

