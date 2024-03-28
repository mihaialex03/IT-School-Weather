// Imi definesc o functie care sa imi returneze iconita de la Open Weather
function getWeatherIcon(iconCode) {
  return `https://openweathermap.org/img/wn/${iconCode}.png`;
}
function windToKmPerHour(meterPerSec) {
  return (meterPerSec * 3600) / 1000;
}
