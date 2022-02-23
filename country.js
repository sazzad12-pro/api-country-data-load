const countri = () => {
  const url = `https://restcountries.com/v2/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLoad(data));
};
const displayLoad = (country) => {
  const countryName = document.getElementById("country");
  for (let count of country) {
    // console.log(count);

    const div = document.createElement("div");
    div.classList.add("countri");
    div.innerHTML = `country name:<h5>${count.name}</h5> <p> ${count.capital}</p> <button onclick="loadCountryByName('${count.name}')">details</button>`;
    countryName.appendChild(div);
  }
};
const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadData(data[0]));
};
const loadData = (countries) => {
  console.log(countries);
  const countryDiv = document.getElementById("country-details");
  const div = document.createElement("div");
  div.innerHTML = `<h5>${countries.name}</h5> <p>population:${countries.population}</p> <img width='200px' src="${countries.flag}" alt=""> `;
  countryDiv.appendChild(div);
};
