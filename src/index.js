import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const capital = "ukraine";



fetchCountries(capital).then(data => {
    console.log(data[0])
});

function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
        return response.json();
    });   
}

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