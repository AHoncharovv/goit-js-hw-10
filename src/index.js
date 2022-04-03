import './css/styles.css';
import { fetchCountries } from './fetchCountries'

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputField = document.querySelector('#search-box');

inputField.addEventListener('input', debounce(omInput, DEBOUNCE_DELAY));

function omInput(event){
    const inputText = event.target.value;
    const capital = inputText.trim();
    console.log(capital.length);
       
    fetchCountries(capital).then(data => {
    const names = data.map(el => el.flags.svg);
    console.log(names.join());
});   
};

////////////////
// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
////////////////

