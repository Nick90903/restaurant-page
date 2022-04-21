import { drawContact } from './draw-Contact';
import {drawMain} from './draw-Main';
import {drawMenu} from './draw-Menu';



function drawHeader() {
    const container = document.querySelector('.content');
    console.log(container);

    //creates all header elements
    const header_Container = document.createElement('div');
    const home_Button = document.createElement('button');
    const menu_Button = document.createElement('button');
    const contact_Button = document.createElement('button');
    const button_Container = document.createElement('div');
    button_Container.classList.add('button-Container');

    const title = document.createElement('h2');

    title.textContent = ('Tom\'s Pizza Pen');
    title.classList.add('title');
    header_Container.appendChild(title);

    header_Container.classList.add('header-Container');

    //Sets up home button and appends
    home_Button.textContent = ('Home');
    home_Button.classList.add('home-Buton');
    home_Button.addEventListener('click', function() {
        drawMain();
    })
    button_Container.appendChild(home_Button);    

    //Set up menu button and appends
    menu_Button.textContent = ('Menu');
    menu_Button.classList.add('menu-Button');
    menu_Button.addEventListener('click', function () {
        drawMenu();
    })
    button_Container.appendChild(menu_Button);

    //Sets up contact us button and appends
    contact_Button.textContent = ('Contact Us');
    contact_Button.classList.add('contact-Button');
    contact_Button.addEventListener('click', function() {
        drawContact();
    })
    button_Container.appendChild(contact_Button);
    console.log(header_Container);
    
    header_Container.appendChild(button_Container);
    container.appendChild(header_Container);
}

export function clearScreen() {
    const temp = document.querySelectorAll('.container');
    if(temp != null){temp.forEach(element => {element.remove()})}
}

drawHeader();
drawMenu();