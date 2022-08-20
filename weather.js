
let nameOfCity = document.getElementById("nameOfCity");
let searchBtn = document.getElementById("searchBtn");
let display = document.getElementById("display");
let icon = document.querySelector("#icon");
let cityName = document.getElementById("cityName");
let comment = document.getElementById("comment");
let lat = document.getElementById("lat")
let lon = document.getElementById("lon")


let city;

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    city = nameOfCity.value 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d18828185d71c238c11c35c2d12b7eb&units=metric`)
    .then(responseWeather => {
        return responseWeather.json();
    })
    .then(respondClimate => {
        cityName.textContent = `${respondClimate.name}`
        display.textContent = `${respondClimate.main.temp}℃`
        // icon.innerHTML =` <img src="http://openweathermap.org/img/w/${respondClimate.weather[0].icon}.png" width="80px"> `
        comment.textContent = `${respondClimate.weather[0].description}`
        lat.textContent = `Lat  ${respondClimate.coord.lat}`
        lon.textContent = `Lon  ${respondClimate.coord.lon}`
        console.log(respondClimate.coord.lon);

        if(comment.textContent == "light rain"){
            icon.innerHTML = `<img src="images/lightRain.png"> `
            console.log('hi')
        }
        else if(comment.textContent == "overcast clouds" ||comment.textContent == "clear sky" ){
            icon.innerHTML = `<img src="images/sun3.png"> `
        }
        else if(comment.textContent == "moderate rain"){
            icon.innerHTML = `<img src="images/cloud3.png"> `
        }
        else if(comment.textContent == "thunderstorm"){
            icon.innerHTML = `<img src="images/thunderstorm.webp" width="200px" > `
        }
        else if(comment.textContent == "thunderstorm"){
            icon.innerHTML = `<img src="images/thunderstorm.webp" width="200px" > `
        }
        else if(comment.textContent == "sunny" ){
            icon.innerHTML = `<img src="images/Sun5.png" width="220px" > `
        }
        else if(comment.textContent == "scattered clouds" || comment.textContent == "few clouds" || comment.textContent == "broken clouds" ){
            icon.innerHTML = `<img src="images/cloud5.jpg" width="200px" > `
        }
        else if(comment.textContent == "rainy" || comment.textContent == "heavy rain"){
            icon.innerHTML = `<img src="images/rainy.png" width="200px" > `
        }
    })


})

