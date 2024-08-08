async function fetchWeather() {
    let searchInput = document.getElementById("search").value;
    const weatherDataSection = document.getElementById("weather-data");
    weatherDataSection.style.display = "block";
    const apiKey = "7afd1b1005bfe6afb0266c70c2e69099";

    if (searchInput === "") {
        weatherDataSection.innerHTML = `
        <div>
          <h2>Empty Input!</h2>
          <p>Please try again with a valid <u>city name</u>.</p>
        </div>
        `;
        return;
    }

    async function getLonAndLat() {
        const countryCode = 91;
        const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.replace(" ", "%20")},${countryCode}&limit=1&appid=${apiKey}`;

        const response = await fetch(geocodeURL);
        if (!response.ok) {
            console.log("Bad response! ", response.status);
            return;
        }
        const data = await response.json();
        if (data.length === 0) {
            console.log("Something went wrong here.");
            weatherDataSection.innerHTML = `
            <div>
              <h2>Invalid Input: "${searchInput}"</h2>
              <p>Please try again with a valid <u>city name</u>.</p>
            </div>
            `;
            return;
        } else {
            return data[0];
        }
    }

    async function getWeatherData(lon, lat) {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const response = await fetch(weatherURL);
        if (!response.ok) {
            console.log("Bad response! ", response.status);
            return;
        }
        const data = await response.json();

        let weatherCondition = data.weather[0].main.toLowerCase();
        const body = document.body;

        switch (weatherCondition) {
            case "rain":
                body.style.backgroundImage = "url('assets/rainy.jpg')";
                break;
            case "clear":
                body.style.backgroundImage = "url('assets/clear.jpg')";
                break;
            case "clouds":
                body.style.backgroundImage = "url('assets/cloudy.jpg')";
                break;
            case "snow":
                body.style.backgroundImage = "url('assets/snowy.jpg')";
                break;
            case "thunderstorm":
                body.style.backgroundImage = "url('assets/thunderstorm.jpg')";
                break;
            case "mist":
                body.style.backgroundImage = "url('assets/mist.jpg')";
                break;
            case "drizzle":
                body.style.backgroundImage = "url('assets/drizzle.jpg')";
                break;
            case "haze":
                body.style.backgroundImage = "url('assets/haze.jpg')";
                break;
            default:
                body.style.backgroundImage = "url('background.jpg')";
                break;
        }

        weatherDataSection.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" width="100" />
        <div>
            <h2>${data.name}</h2>
            <p><strong>Temperature:</strong> ${Math.round(data.main.temp - 273.15)}°C</p>
            <p><strong>Description:</strong> ${data.weather[0].description}</p>
        </div>
        `;
        weatherDataSection.style.display = "flex";
    }

    document.getElementById("search").value = "";
    const geocodeData = await getLonAndLat();
    if (geocodeData) {
        await getWeatherData(geocodeData.lon, geocodeData.lat);
    }
}

document.getElementById("search").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        fetchWeather();
    }
});