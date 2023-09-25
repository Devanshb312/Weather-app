document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "30a50a33164a324df067dfb3ea9d8585"; // Get your API key from OpenWeatherMap

    const searchButton = document.getElementById("searchButton");
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");

    searchButton.addEventListener("click", function () {
        const city = cityInput.value;

        // Check if the input field is not empty
        if (city.trim() === "") {
            alert("Please enter a city name.");
            return;
        }

        // Fetch weather data from OpenWeatherMap
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                // Handle API response and display weather information
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const locationName = data.name;

                weatherInfo.innerHTML = `
                    <h2> <i class="fa-solid fa-location-dot" style="color: blue;"></i> ${locationName}</h2>
                    <p>Temperature <i class="fa-solid fa-temperature-low" style="color: blue;"></i>: ${temperature}°C </p>
                    <p>Weather <i class="fa-solid fa-smog" style="color: blue;"></i>: ${weatherDescription}</p>
                `;
            })
            .catch(error => {
                // Handle errors
                weatherInfo.innerHTML = "City not found. Please try again.";
            });
    });
});
