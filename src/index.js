import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputField = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
countryList.style.padding = "0";
const countryInfo = document.querySelector('.country-info');
const li = document.querySelectorAll('li');
// li.style.listStyleType = "none";





inputField.addEventListener('input', debounce(omInput, DEBOUNCE_DELAY));

function omInput(event){
    const inputText = event.target.value;
    const capital = inputText.trim();
    
       
    fetchCountries(capital).then(data => {
        if (data.length > 10) {
            Notify.info('Too many matches found. Please enter a more specific name.')
            return;
        } else if (data.length === 1) {
          const countryMarkup = data.map(makeOneCountryMarkup).join('');
            countryInfo.insertAdjacentHTML('beforeend', countryMarkup);  
            return;
        } else if (data.length != 1) {
          const countryListMarkup = data.map(makeCountryListMarkup).join('');
            countryList.insertAdjacentHTML('beforeend', countryListMarkup);  
            return;
        }       
});   
};

const makeCountryListMarkup = (element) => {
    return      `<li style="display:flex; align-items:center;" 
                style="list-style-type: none;">
                <img
                style="width: auto; height:20px; margin-right:15px;"
                src="${element.flags.svg}"
                />
                <p>${element.name.official}</p>
                </li>`;
};

const makeOneCountryMarkup = (element) => {
    return      `<ul style="display:block;">
                <li style="list-style-type: none;">
                <div style="display:flex; align-items:center;" 
                style="list-style-type: none;">
                <img
                style="width: auto; height:20px; margin-right:15px;"
                src="${element.flags.svg}"
                />
                <p>${element.name.official}</p>
                </div>
                </li>
                <li style="list-style-type: none;"><p>Capital: ${element.capital}</p></li>
                <li style="list-style-type: none;"><p>Population: ${element.population}</p></li>
                <li style="list-style-type: none;"><p>Languages: ${element.languages}</p></li>
                </ul>`;
};
 

// const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

// const galleryElements = document.querySelector('.gallery');

// galleryElements.insertAdjacentHTML('beforeend', makeGalleryMarkup);
////////////////
// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
////////////////

// const makeGalleryItemMarkup = (element) => {
//     return `<div class="gallery__item">
//             <a class="gallery__link" href="large-image.jpg">
//             <img
//             class="gallery__image"
//             src="${element.preview}"
//             data-source="${element.original}"
//             alt="${element.description}"
//             />
//             </a>
//             </div>`;
// };

// const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

// const galleryElements = document.querySelector('.gallery');

// galleryElements.insertAdjacentHTML('beforeend', makeGalleryMarkup);
