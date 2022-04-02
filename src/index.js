import './css/styles.css';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputField = document.querySelector('#search-box');

inputField.addEventListener('input', debounce(omInput, DEBOUNCE_DELAY));

function omInput(event){
    const capital = event.target.value;
    console.log(capital);
    
fetchCountries(capital).then(data => {
    console.log(data.length)
});   
};





function fetchCountries(name) {
    const URL = "https://restcountries.com/v3.1/";
    return fetch(`${URL}name/${name}?fullText=false&fields=name,capital,population,flags,languages`).then(response => {
        return response.json();
    });   
}
// name/aruba?fullText=true
// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
   
    /////////////////


// https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages

// fetch(`https://restcountries.com/v3.1/name/${capital}`).then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data[0]);
// }).catch(err => {
//     console.log(err);
// });


// fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages').then(response => {
//     return response.json();
// }).then(country => {
//     console.log(country)
// });

// пример запроса на флаг 
// "flags": {
//   "svg": "https://restcountries.com/data/per.svg",
//   "png": "https://restcountries.com/data/png/per.png"
// }

// https://restcountries.com/v2/{service}?fields={field},{field},{field}
// https://restcountries.com/v2/all?fields=name,capital,currencies