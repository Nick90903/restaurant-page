const drawFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer-Container');

    const footer_Text = document.createElement('p');
    footer_Text.innerHTML = ('Copyright 2022 <a href="https://github.com/Nick90903">Nick90903</a>');



    footer.appendChild(footer_Text);
    return footer;
}

export {drawFooter};