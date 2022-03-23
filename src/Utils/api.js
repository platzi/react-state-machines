export const fetchCountries = () =>
  fetch('https://restcountries.com/v3.1/region/ame')
    .then((response) => response.json()); 