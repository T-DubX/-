const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "2742d241d4b679d45b75ffb8f7117d32"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units-metric&APPID=${param.appid}`)
    .then (weather => {
        return weather.json();
    }).then(showWeather);
}

function showWeather(data) {
	console.log(data);
    document.querySelector(".temp-text").innerHTML =
    Math.round(data.main.temp - 273) + "&deg;";

  document.querySelector(".clouds-header").textContent =
    data.weather[0]["description"];

    document.querySelector('.timezone-text').textContent = data.timezone;

    document.querySelector('.wind-text').textContent = data.wind.speed;
}

getWeather();


document.querySelector('#city').onchange = getWeather;