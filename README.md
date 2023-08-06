Link para ver el resultado: [APLICACION DE CLIMA TRABAJO FINALIZADO](https://app-climate-javascript.netlify.app//)

## Estructura del código

A continuación se muestra el código JavaScript necesario para realizar la solicitud a la API de OpenWeatherMap y mostrar los datos del clima en tu aplicación. Asegúrate de que el código esté vinculado correctamente con tu archivo HTML y que la etiqueta `<div>` con el ID "datosClima" esté presente en tu página.

## Explicación del código

El código anterior consta de dos funciones principales: `fetchClimateData(city)` y `showClimateData(data)`. Aquí está cómo funciona cada una:

1.  `fetchClimateData(city)`: Esta función se encarga de hacer una solicitud a la API de OpenWeatherMap para obtener los datos del clima de la ciudad especificada. Recibe el nombre de la ciudad como parámetro. Utiliza la función `fetch()` para enviar una solicitud GET a la URL de la API, incluyendo la ciudad y tu clave de API. Luego, convierte la respuesta en formato JSON utilizando el método `json()`. Finalmente, llama a la función `showClimateData(data)` pasando los datos obtenidos como argumento.

    function fetchClimateData(city){
        fetch(`${urlBase}?q=${city}&appid=${api_key}`)
        .then(data => data.json())
        .then(data =>showClimateData(data))
    }
    
2.  `showClimateData(data)`: Esta función se encarga de mostrar los datos del clima en la página. Recibe los datos del clima en formato JSON como parámetro. Primero, obtiene las diferentes propiedades relevantes de los datos, como el nombre de la ciudad, el nombre del país, la temperatura, la humedad, la descripción y el icono del clima. Luego, crea elementos HTML apropiados, como encabezados y párrafos, y les asigna el contenido correspondiente utilizando la propiedad `textContent`. También crea un elemento de imagen para mostrar el icono del clima. Finalmente, agrega todos los elementos creados al elemento `<div>` con el ID "datosClima" en tu página.

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
    



Link para ver el resultado: [APLICACION DE CLIMA TRABAJO FINALIZADO](https://app-climate-javascript.netlify.app//)
