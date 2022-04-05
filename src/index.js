import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputField = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
countryList.style.padding = "0";
const countryInfo = document.querySelector('.country-info');


inputField.addEventListener('input', debounce(omInput, DEBOUNCE_DELAY));

function omInput(event){
    const inputText = event.target.value;
    const capital = inputText.trim();
  resetCountryInfo();
       
  fetchCountries(capital).then(result => {
    
    if (result.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.')
      return;
    } else if (result.length === 1) {
      const countryMarkup = result.map(makeOneCountryMarkup).join('');
      countryInfo.insertAdjacentHTML('beforeend', countryMarkup);
      return;
    } else if (result.length != 1) {
      const countryListMarkup = result.map(makeCountryListMarkup).join('');
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
                <li style="list-style-type: none;"><p>Languages: ${Object.values(element.languages)}</p></li>
                </ul>`;
};

function resetCountryInfo() {
 countryList.innerHTML = "";
 countryInfo.innerHTML = ""; 
}; 



