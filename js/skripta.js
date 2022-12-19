var city1 = {
  name: "Novi Sad",
  country: "RS",
  capital: false,
};

var city2 = {
  name: "Beograd",
  country: "RS",
  capital: true,
};

var city3 = {
  name: "Manchester",
  country: "UK",
  capital: false,
};

var city4 = {
  name: "London",
  country: "UK",
  capital: true,
};

var city5 = {
  name: "Valencia",
  country: "ESP",
  capital: false,
};

var city6 = {
  name: "Barcelona",
  country: "ESP",
  capital: false,
};

var city7 = {
  name: "Nis",
  country: "RS",
  capital: false,
};

var city8 = {
  name: "Madrid",
  country: "ESP",
  capital: true,
};

var city9 = {
  name: "Leeds",
  country: "UK",
  capital: false,
};
var cities = [];
cities.push(city2);
cities.push(city1);
cities.push(city3);
cities.push(city4);
cities.push(city5);
cities.push(city6);
cities.push(city7);
cities.push(city8);
cities.push(city9);

var countries = ["RS", "UK", "ESP"];
let selectCountries = document.getElementById("sel1");
let selectCities = document.getElementById("sel2");
window.onload = function () {
  for (let zemlja of countries) {
    selectCountries.add(new Option(zemlja));
  }
  selectCities.options.length = 0;
  selectCities.disabled = false;
  selectCities.style.visibility = "visible";
  citiesToPopulate = cities.filter((city) => city.country === "RS");
  for (let item of citiesToPopulate) {
    selectCities.add(new Option(item.name));
  }
};

let proveraForme = (forma) => {
  let validated = true;
  for (let i = 0; i < 4; i++) {
    if (!forma[i].value) validated = false;
  }
  if (forma.name.value[0] !== forma.name.value[0].toUpperCase())
    validated = false;
  if (forma.country.length > 3) validated = false;
  if (!selectCountries.value) validated = false;
  if (!selectCities.value) validated = false;
  return validated;
};
let populateCities = (event) => {
  selectCities.options.length = 0;
  selectCities.disabled = false;
  selectCities.style.visibility = "visible";
  citiesToPopulate = cities.filter((city) => city.country === event.value);
  for (let item of citiesToPopulate) {
    selectCities.add(new Option(item.name));
  }
};
let checkIfCapital = (event) => {
  console.log(event.value);
  for (let city of cities) {
    if (city.name === event.value && city.capital === true) {
      document.getElementById("capital").checked = true;
    } else if (city.name === event.value && city.capital === false) {
      document.getElementById("capital").checked = false;
    }
  }
};
