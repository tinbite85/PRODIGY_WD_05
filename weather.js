document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = '9a90add5fae14a1ebee74018242206'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
                document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                document.getElementById('weather-result').style.display = 'block';
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            alert('An error occurred. Please try again.');
            console.error('Error fetching the weather data:', error);
        });
}
