// api key in general nu ar fi bine sa le stocam in format text in codul nostru, pentru ca orice ar fi putea sa le vada si sa le foloseasca
const API_KEY = "6cbc656fbc466ea46322c51296fe53b0";
// Construim link urile (endpoint) catre care noi o sa facem requesturi cu JS

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
// declaram a doua functie pe care vom folosi pentru a lua vremea pe 5 zile
function getForecastWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
