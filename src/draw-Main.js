import { drawFooter } from "./draw-Footer";

const drawMain = () => {
    console.log('Home Clicked');
    const temp = document.querySelector('.body-Content');
    if(temp != null){temp.remove()}
    
    const main = document.querySelector('.content');

    const content = document.createElement('div');
    content.classList.add('body-Content');

    const sell_Point = document.createElement('p');
    sell_Point.classList.add('sell-Point');
    sell_Point.textContent = ('Rated #1 in the county by 3 different groups!');

    const founded = document.createElement('p');
    founded.classList.add('founded');
    founded.textContent = ('Founded 1891');

    const pizza_Cook = document.createElement('img');
    pizza_Cook.classList.add('pizza-Cook');
    pizza_Cook.src = ('dist/resources/images/pizzacook.jpg');

    const CTA = document.createElement('p');
    CTA.classList.add('CTA');
    CTA.textContent = ('Visit Us In Person!');

    content.appendChild(sell_Point);
    content.appendChild(founded);
    content.appendChild(pizza_Cook);
    content.appendChild(CTA);
    main.appendChild(content);
    main.appendChild(drawFooter());

}

export {drawMain};