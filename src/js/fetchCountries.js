export function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';
  const searchCountries = '?fields=flag,capital,name,population,languages';
  fetch(`${BASE_URL}${name}?${searchCountries}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
