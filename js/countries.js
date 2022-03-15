const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
};
const getCountryHTML = everyCountry => {
    return `
        <div class="country">
            <h2>${everyCountry.name.common}</h2>
            <h3>Capital: ${everyCountry.capital}</h3>
            <img src="${everyCountry.flags.png}">
            <h3>Population: ${everyCountry.population}</h3>
        </div>
    `;
};
loadCountries();