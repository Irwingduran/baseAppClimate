let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'f47be8ecdd9adfc7eb99318c74c498c1'
let difKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value
    if (city) {
        fetchClimateData(city)
    }
})

function fetchClimateData(city) {
    fetch(`${urlBase}?q=${city}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => showClimateData(data))
}

function showClimateData(data) {
    console.log(data)
    const divClimateData = document.getElementById('climateData')
    divClimateData.innerHTML = ''

    const nameCity = data.name
    const nameCountry = data.sys.country
    const temperature = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityTitle = document.createElement('h2')
    cityTitle.textContent = `${nameCity}, ${nameCountry}`

    const temperatureInfo = document.createElement('p')
    temperatureInfo.textContent = `Temperature is: ${Math.floor(temperature - difKelvin)}°C`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `Humidity is: ${humidity}%`

    const iconInfo = document.createElement('img')
    iconInfo.src = 'https://openweathermap.org/img/wn/10d@2x.png'

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `The meteorological description is: ${description}`

    divClimateData.appendChild(cityTitle)
    divClimateData.appendChild(temperatureInfo)
    divClimateData.appendChild(humidityInfo)
    divClimateData.appendChild(iconInfo)
    divClimateData.appendChild(descriptionInfo)

}