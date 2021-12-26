const weatherImg = document.querySelector(".weatherImg");
const temp = document.querySelector(".temp");
const locationDiv = document.querySelector(".location");

const apiKey = "b4949d04e903b11076b8629da75fc115"

function GeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        locationDiv.innerText = data.name;
        weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherImg.alt = data.weather[0].main;
        temp.innerText = `${Math.round(data.main.temp * 10) / 10} °C`;
    });

}

function GeoError() {
    temp.innerText = "No weather data";
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError)