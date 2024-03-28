// declar functia care imi va afisa vremea pe urm 5 zile, iar apelul functiei se va face din index.js

function displayWeatherForecast(city) {
  //prima data ne generam linkul API catre care noi facem requesturi
  const forecastWeatherEndpoint = getForecastWeatherEndpoint(city);
  //   console.log(forecastWeatherEndpoint);
  //selectez elem cu clasa .weather-forecast, aici am sa inserez html general in faza de fetch
  const weatherForecastContainer = document.querySelector(".weather-forecast");
  weatherForecastContainer.innerHTML = '';

  fetch(forecastWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      //   extragem doar proprietatea list din obiectul data
      const { list } = data;
      //   ne declaram un obiect gol in care o sa tinem predictiile pe zile(luni, marti etc)
      const daysMap = {};

      list.forEach((element) => {
        // extragem proprietatea dt din fiecare element al array ului
        const { dt } = element;
        const day = getDayOfTheWeek(dt);

        if (daysMap[day]) {
          daysMap[day].push(element);
        } else {
          daysMap[day] = [element];
        }
      });
      console.log(daysMap);
      //   iteram prin obiectul daysMap care are deja datele grupate pe zile, folosind instructiunea for...in - adica fiecare cheie din obiect reprezinta o zi a saptamanii
      for (dayKey in daysMap) {
        weatherForecastContainer.innerHTML += `<h3 class="text-primary">${dayKey}</h3>`;
        let weatherByDay = daysMap[dayKey];
        weatherByDay.forEach((element) => {
            const {dt, main, weather} = element;
            // procesez ora
            const hour = getHour(dt);
            // rotunjim temp
            const temperature = Math.round(main.temp);
            const realFeel = Math.round(main.feels_like);
            const description = weather[0].description;
            const weatherIcon = getWeatherIcon(weather[0].icon);
            // inseram in html
            weatherForecastContainer.innerHTML += `
                <div class="weather-forecast-box d-flex justify-content-between align-items-center w-100 border rounded mb-3 p-3">
                    <div>${hour}</div>
                    <div><img src="${weatherIcon}"/></div>
                    <div class="fs-3"><strong>${temperature}°C</strong></div>
                    <div>${description}</div>
                    <div>Real feel: <strong>${realFeel}°C</strong></div>
                </div>
            `;
        })
      }
    });
}
