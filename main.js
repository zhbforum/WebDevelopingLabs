import ColorChanger from './library.js';

const colorChanger = new ColorChanger('my-paragraph', 'red');

const button = document.getElementById('my-button');
if (button) 
    button.addEventListener('click', () => colorChanger.changeColor());
