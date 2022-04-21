import { clearScreen } from ".";
import { drawFooter } from "./draw-Footer";

const drawMenu = () => {
    clearScreen();
    console.log('drawMenu Clicked');

    const main = document.querySelector('.content');
    const container = document.createElement('div');
    container.classList.add('menu-Container');
    container.classList.add('toRemove');

    const content = document.createElement('div');
    content.classList.add('body-Content');

    // Sets up Size Chart

    const size_Container = document.createElement('div');
    size_Container.classList.add('size-Container');

    const size_Label = document.createElement('h3');
    size_Label.textContent = ('Sizes');

    const Sizes = document.createElement('div');
    Sizes.classList.add('sizes');

    const sizes_Array = ['Small', 'Medium', 'Large'];

    for(let i = 0; i < sizes_Array.length; i++) {
        const temp = document.createElement('p');
        temp.textContent = sizes_Array[i];
        Sizes.appendChild(temp);
    }

    size_Container.appendChild(size_Label);
    size_Container.appendChild(Sizes);
    content.appendChild(size_Container);

    // Sets up Toppings Chart

    const topping_Container =  document.createElement('div');
    topping_Container.classList.add('topping-Container');

    const topping_Label = document.createElement('h3');
    topping_Label.textContent = ('Toppings');

    const toppings_Array = ['Pepperoni', 'Sausage', 'Hamburger', 'Onion', 'Cheese', 'Tomatoes', 'Green Peppers', 'Mushrooms', 'Jalapenos'];
    const toppings = document.createElement('div');
    toppings.classList.add('toppings');

    for(let i = 0; i < toppings_Array.length; i++) {
        const temp = document.createElement('p');
        temp.textContent = toppings_Array[i];
        toppings.appendChild(temp);
    }

    topping_Container.appendChild(topping_Label);
    topping_Container.appendChild(toppings);
    content.appendChild(topping_Container);
    
    // Sets up Crust Chart

    const crust_Container = document.createElement('div');
    crust_Container.classList.add('crust-Container');

    const crust_Label = document.createElement('h3');
    crust_Label.textContent = ('Crusts');

    const crust_Array = ['Thin', 'Hand-Tossed', 'Deep Dish'];
    const crusts = document.createElement('div');
    crusts.classList.add('crusts');

    for(let i = 0; i < crust_Array.length; i++) {
        const temp = document.createElement('p');
        temp.textContent = crust_Array[i];
        crusts.appendChild(temp);
    }

    crust_Container.appendChild(crust_Label);
    crust_Container.appendChild(crusts);
    content.appendChild(crust_Container);

    container.appendChild(content);
    container.appendChild(drawFooter());

    main.appendChild(container);

}

export {drawMenu};