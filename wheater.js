async function getWeather() {
    const city = document.getElementById('city').value;
    const API_KEY = '84f1062ded490ce12eab36131c350d43';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherDataDiv = document.getElementById('weather-data');
            const tempCelsius = (data.main.temp - 273.15).toFixed(2);  

            weatherDataDiv.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${tempCelsius}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
