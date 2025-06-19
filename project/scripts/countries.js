const url = "https://countriesnow.space/api/v0.1/countries/";


async function getCountries() {
    const result = await fetch(url);
    const countrydata = await result.json();
    return countrydata.data;
}
const lo = document.querySelector("#countries");
const city = document.querySelector("#city");


async function displayCountry() {
    const country = await getCountries();
    country.forEach((c) => {
        const option = document.createElement("option");
        option.value = c.country;
        option.innerHTML = c.country;
        lo.appendChild(option);
    })
};

lo.addEventListener("change", () => {
    if (lo.value) {
        city.disabled = false;
        async function displayCity() {
            const countryCity = await getCountries();
            const selectCountry = countryCity.find((c) => c.country === `${lo.value}`);
            selectCountry.cities.forEach((cityName) => {
                const cityOption = document.createElement("option");
                cityOption.value = cityName;
                cityOption.innerHTML = cityName;
                // alert(`${list[chosenCountry]} `);
                city.appendChild(cityOption);
            });
        }
        displayCity();

    } else {
        city.innerHTML = "<option>Select City</option>";
        city.disabled = true;
    }
})


displayCountry();
