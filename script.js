const weatherApi = {
    key: "cba7a1bc7d9ad67908b0d73155a71588",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}

const searchInput = document.getElementById('inputBox');


searchInput.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){
        console.log(searchInput.value);
        getWeatherReport(searchInput.value);
        document.querySelector('.weatherBody').style.display = 'block';
    }
});


function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}


function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('images/haze.jpg')";
        
    } else if(weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('images/rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {      
        document.body.style.backgroundImage = "url('images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        
    } else if(weatherType.textContent == 'Smoke') {   
        document.body.style.backgroundImage = "url('images/smoke.jpg')";
        
    } else if(weatherType.textContent == 'Overcast') {  
        document.body.style.backgroundImage = "url('images/overcast.jpg')";
        
    } else if(weatherType.textContent == 'Fog') { 
        document.body.style.backgroundImage = "url('images/fog.jpg')";
        
    } else if(weatherType.textContent == 'Drizzle') {
        document.body.style.backgroundImage = "url('images/drizzle.jpg')";
        
    } 
}


function dateManage(newDate) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = newDate.getFullYear();
    let month = months[newDate.getMonth()];
    let date = newDate.getDate();
    let day = days[newDate.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}