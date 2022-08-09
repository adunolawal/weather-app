let nameOfCity = document.getElementById("nameOfCity");
let searchBtn = document.getElementById("searchBtn");
let display = document.getElementById("display");
let icon = document.getElementById("icon");

let city;

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    city = nameOfCity.value 
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d18828185d71c238c11c35c2d12b7eb&units=metric`)
    .then(responseWeather => {
        return responseWeather.json();
    })
    .then(respondClimate => {
        console.log(respondClimate.main)
        console.log(respondClimate)
        display.textContent = `${respondClimate.main.temp}C`
        // icon.textContent = `${respondClimate.weather[0].icon}`
    })
})
