// Get current year for footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Weather data for Tokyo
const temperature = 5; // in Celsius
const conditions = "Partly Cloudy";
const windSpeed = 12; // in km/h

// Calculate wind chill
function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
        return Math.round(windChill * 10) / 10;
    } else {
        return "N/A";
    }
}

const windChill = calculateWindChill(temperature, windSpeed);

// Display weather information
document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
document.getElementById('conditions').textContent = `Conditions: ${conditions}`;
document.getElementById('wind').textContent = `Wind Speed: ${windSpeed} km/h`;
document.getElementById('windchill').textContent = `Wind Chill: ${windChill === "N/A" ? "N/A" : `${windChill}°C`}`;