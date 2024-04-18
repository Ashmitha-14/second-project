
function getWeather() {
    const location = document.getElementById("locationInput").value;
    const apiKey = "63a90ae96d390ec37d6c1252f5a86e1a"; // Get your API key from a weather service provider
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const result = `${location} `;
            const temp=`+${temperature} `;
            const speed=`Wind speed : ${description} `;
           
            document.getElementById("result").innerText = result;
            document.getElementById("temp").innerText = temp;
            document.getElementById("speed").innerText = speed;
            var image = document.getElementById("Image");
            var back = document.getElementById("Desktop12");
            var dav = document.getElementById("myDiv");
            const celcius=`${temperature}`;
            let text=`${description} `;

if (text.match("sun")) {
image.src = "sun.png"; 
back.style.backgroundColor = "#F3CC71";
dav.style.backgroundColor = "linear-gradient(180deg, #FDEFB3 0%, #EFBA53 71%)";
} else if (text.match("cloud")) {
image.src = "cloud.png"; 
back.style.backgroundColor = "#7AD1E5";
dav.style.backgroundColor = "linear-gradient(180deg, #C8E9FC 0%, #8CD1F9 71%)";
} else if ( celcius="40") {
image.src = "light.png"; 
} else {
image.src = "rain.png"; 
}

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long'};
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById("day").textContent = formattedDate;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display date and time immediately
updateDateTime();