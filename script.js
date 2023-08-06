const apikey="f466b4121b9ce9df525adc3cf36fbfb9";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weathericon");

async function weatherweb(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="snow.png";

    }else if(data.weather[0].main=="Haze"){
        weatherIcon.src="haze.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main=="Thunderstorm"){
        weatherIcon.src="thunderstorm.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
    

}
 searchbtn.addEventListener("click", ()=>{
    weatherweb(searchbox.value);
})