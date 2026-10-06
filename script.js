async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {
        document.getElementById("weatherResult").innerHTML =
            "<p>Please enter a city name.</p>";
        return;
    }

    const apiKey = "YOUR_API_KEY";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const cityName = data.name;

        document.getElementById("weatherResult").innerHTML = `
            <h2>${cityName}</h2>
            <p>Temperature: ${temperature} °C</p>
            <p>Weather: ${description}</p>
        `;

    } catch (error) {

        document.getElementById("weatherResult").innerHTML =
            "<p>City not found. Please try again.</p>";
    }
}