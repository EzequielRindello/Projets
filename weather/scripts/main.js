const apiKey = "942cb3e734cbba69ea8a179cac8e553d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=rosario";

async function checkWeather(){
    const response = await fetch(apiUrl +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();
































