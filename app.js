document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city){
    let key = '77f97b598769bf8861004c74e30ebbba';
    let req = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    fetch(req)
        .then(function(resp) {
            return resp.json()
    })
    .then(function (data){
        console.log(data)
        drawWeather(data)
    })
    .catch(function (error) {
        console.log(error)
        // catch any errors
    })
}
function drawWeather(data){
    let temp = Math.round(data.main.temp - 273.15)

    document.querySelector('#location').innerHTML = data.name
    document.querySelector('#description').innerHTML = data.weather[0].description
    document.querySelector('#temp').innerHTML = `${temp}&deg;`
}

function cityWeather() {
    weatherDataFetch('Tallinn');
}