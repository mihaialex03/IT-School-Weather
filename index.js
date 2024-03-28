let currentCityFromLS = localStorage.getItem("city"); 
const currentCityTag = document.querySelector('.current-city');
if(currentCityFromLS){
    currentCityTag.innerHTML = currentCityFromLS;
}
if(!currentCityFromLS){
    localStorage.setItem("city", "București");
    currentCityFromLS = "București";
}
// afisam vremea curenta folosind o functie din alt fisier
displayCurrentWeather(currentCityFromLS);
// afisam vremea pe urm 5 zile
displayWeatherForecast(currentCityFromLS);