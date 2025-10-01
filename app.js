const apiKey='4e2489c902e1c4d97cd1be052baca7c6';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".status")


async function checkWeather(city){
    const response=await fetch(apiUrl + city+`&appid=${apiKey}`)
    let data =await response.json();
    if (data.cod === "404") {
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "--°C";
        document.querySelector(".humidity").innerHTML = "--%";
        document.querySelector(".wind").innerHTML = "-- Km/h";
        // weatherIcon.src = "images/error2.png"; // optional: add a default error icon
        return;}
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +'°C';
    document.querySelector(".humidity").innerHTML=data.main.humidity +'%';
    document.querySelector(".wind").innerHTML=data.wind.speed +" Km/h";

    if(data.weather[0].main =="Clear"){
        weatherIcon.src="images/clear.png"
    }else if(data.weather[0].main =="Clouds"){
        weatherIcon.src="images/clouds.png"
    }else if(data.weather[0].main =="Mist"){
        weatherIcon.src="images/mist.png"
    }else if(data.weather[0].main =="Rain"){
        weatherIcon.src="images/rain.png"
    }else if(data.weather[0].main =="Snow"){
        weatherIcon.src="images/snow.png"
    }
    

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

checkWeather("sudbury");   // by default it will show sudbury's weather







