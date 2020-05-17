const html = document.querySelector('html');
const checkbox = document.querySelector('#btn-switch');

const getStyle = (elemento, style) => window.getComputedStyle(elemento).getPropertyValue(style);

const defaultStyle = {
    bg: getStyle(html, '--bg'),
    title: getStyle(html, '--title'),
    switch: getStyle(html, '--switch')
};

const darkMode = {
    bg: '#1a1c2c',
    title: '#73eff7',
    switch: '37px'
};

const transformProp = prop => '--' + prop;

const alteraModo = props => {

    Object.keys(props).map(prop => {

        html.style.setProperty(transformProp(prop), props[prop]);
    });
};

checkbox.addEventListener('change', () => checkbox.checked ? alteraModo(darkMode) : alteraModo(defaultStyle));
