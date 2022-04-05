import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchCountries(name) {
    const URL = "https://restcountries.com/v3.1/";
    return fetch(`${URL}name/${name}?fullText=false&fields=name,capital,population,flags,languages`).then(response => {
        if (!response.ok) {
        throw new Error(response.status);
      }
        return response.json();
    }).catch(() => {
        Notify.failure('Oops, there is no country with that name');
  });   
}