const bucharestButton = document.querySelector('.dropdown-menu li .bucharest');
const timisoaraButton = document.querySelector('.dropdown-menu li .timisoara');
const oradeaButton = document.querySelector('.dropdown-menu li .oradea');
const aradButton = document.querySelector('.dropdown-menu li .arad');
const sibiuButton = document.querySelector('.dropdown-menu li .sibiu');

function updateCurrentCity(city){
    const currentCityElem = document.querySelector('.current-city') 
    currentCityElem.innerHTML = city;
}

function updateWeather(city){
    localStorage.setItem("city", city);
    
    displayCurrentWeather(city)
    updateCurrentCity(city);
    displayWeatherForecast(city);
}

// adaugam event listener pe fiecare element in parte
bucharestButton.addEventListener('click', function(){
    // la click se va schimba numele orasului
    updateWeather('București');
})
timisoaraButton.addEventListener('click', function(){
    // la click se va schimba numele orasului
    updateWeather('Timișoara');
})
oradeaButton.addEventListener('click', function(){
    // la click se va schimba numele orasului
    updateWeather('Oradea');
})
aradButton.addEventListener('click', function(){
    // la click se va schimba numele orasului
    updateWeather('Arad');
})
sibiuButton.addEventListener('click', function(){
    // la click se va schimba numele orasului
    updateWeather('Sibiu');
})