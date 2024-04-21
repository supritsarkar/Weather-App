const apiKey = "7e8d15a75a2d59c83f23c170fa1c3a67";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");

const btn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  document.querySelector(".weather").style.display = "block";

  try {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await res.json();

    document.querySelector(".city").innerHTML =
      data.name; /* it will update the city name */

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) +
      "°c"; /* this will show the current degree in number ,coz I have used  the round method */

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    /* updating imgs according to weather condition */
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/Rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";

    document.querySelector(".error").style.display = "none";
  } catch (e) {
    document.querySelector(".error").style.display =
      "block"; /* this will help to hide the data */

    document.querySelector(".weather").style.display =
      "none"; /* vul val city pass hole ,kono weather report e debe na  */
  }
}
btn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
