let nameOfCity = document.getElementById("nameOfCity");
let searchBtn = document.getElementById("searchBtn");
let display = document.getElementById("display");
let icon = document.querySelector("#icon");
let cityName = document.getElementById("cityName");
let comment = document.getElementById("comment");
let result = document.querySelector(".result")
let city;

searchBtn.addEventListener("click", (e) => {
    if (result.style.display === "none"){
        result.style.display = "block";
    }
    else {
        result.style.display = "block"
    }
    e.preventDefault()
    city = nameOfCity.value 

    // handles fetching of data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d18828185d71c238c11c35c2d12b7eb&units=metric`)
    .then(responseWeather => {
        return responseWeather.json();
    })
    .then(respondClimate => {
        cityName.textContent = `${respondClimate.name}`
        display.textContent = `${respondClimate.main.temp}℃`
        comment.textContent = `${respondClimate.weather[0].description}`

        if(comment.textContent == "light rain"){
            icon.innerHTML = `<img src="images/lightRain.png"> `
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

