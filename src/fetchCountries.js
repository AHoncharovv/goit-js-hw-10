export function fetchCountries(name) {
    const URL = "https://restcountries.com/v3.1/";
    return fetch(`${URL}name/${name}?fullText=false&fields=name,capital,population,flags,languages`).then(response => {
        return response.json();
    });   
}