// declaram functia care imi va afisa vremea curenta - apelul ei se face in index.js
function displayCurrentWeather(cityName) {
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(cityName);
  // facem request catre server
  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      
      //   extragem proprietatile de care avem nevoie din raspuns
      const { name, dt, main, weather, wind } = data;
      // o sa luam ziua din saptamana - pentru asta ne folosim de proprietatea dt- ca sa facem asta, o sa ne creem un util de date
      const day = getDayOfTheWeek(dt);
      const hour = getHour(dt);
      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);
      const description = weather[0].description;
      const weatherIcon = getWeatherIcon(weather[0].icon);
      // calculam viteza vantului
      const windSpeedInKm = Math.round(windToKmPerHour(wind.speed));
      
      const descriptionElement = document.querySelector(".current-weather");
      descriptionElement.innerHTML = `
        <div class="px-3">
          <div class="fs-2 mb-2"><strong>${name}</strong></div>
          <div class="fs-4"><strong>${day}</strong>, ${hour}</div>
          <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temperature}°C</strong>
            <img src="${weatherIcon}"/>
          </div>
        </div>
        <div class="px-3">
          <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
          <p class="fs-5">${description}</p>
          <p class="fs-5">Vant: <strong>${windSpeedInKm} km/h</strong></p>
        </div>
      `;
    });
}
