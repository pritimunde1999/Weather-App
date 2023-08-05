const apiKey = "7e304c222e37991f872ba87661078242";

const citySet = new Set();

async function fetchData(cityName){
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
   const response = await fetch(url,{method:"GET"});
   const result = await response.json();

   sortedArray(result);
}

 const city = document.getElementById("searched");
 const addbtn = document.getElementById("add");
 const arr =[];

 addbtn.addEventListener("click", ()=>{
    let cityName = city.value.trim();
    
    if(cityName==="" || citySet.has(cityName))
    {
        return;
    }
     
    citySet.add(cityName);
    fetchData(cityName);
 });



 const container = document.getElementById("card-container");

 function addDataToDOM(data){
     const card = document.createElement("div");
     card.id = "card";

    const temp = Math.round(data.main.temp);
    const high = Math.round(data.main.temp_max);
    const low = Math.round(data.main.temp_min);
    const city = data.name;
    const country = data.sys.country;
    const info = selectLogo(data);
    let logo = info[0];
    let desc = info[1];
     card.innerHTML=
     `<div id="background">
     <img src="./images/Rectangle 1.png">
 </div>
<div id="weather-info">
 <div id="info">
     <p style="font-size: 64px; margin-bottom: 15px;">${temp}°</p>
     <p style="font-size: 13px;color: rgb(170, 164, 164);">H:${high}° L:${low}°</p>
     <p style="font-size: 16px;">${city}, ${country}</p>
 </div>
 <div id="info-2">
     <img src="${logo}">
     <p style="font-size: 13px;">${desc}</p>
 </div>
</div>`

  container.appendChild(card);
 
 }

 
 
function sortedArray(data){
    
    if(data.message === 'city not found'){
        return;
    }
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(data.name === element.name){
            insert = !insert;
            return;
        }
    }

    arr.push(data);
    container.innerHTML='';
    arr.sort((a,b)=>{
        return a.main.temp - b.main.temp;
    });

    arr.forEach((ele)=>{
        addDataToDOM(ele);
    })
 }

 function selectLogo(data){
    let imageUrl = "";
    let desc = "";
    if(data.weather[0].main === "Clear" || data.weather[0].main === "Sunny"){
        imageUrl ="./images/icons8-sun-48.png"
        desc = data.weather[0].main;
    }
    
    else if(data.weather[0].main === "Storm" || Math.round(data.wind.speed) >= 10){
        imageUrl = "./images/icons8-storm-48.png";
        desc = data.weather[0].main;
        
    }

    else if(data.weather[0].main === "Storm" || Math.round(data.wind.speed) >= 20){
        imageUrl = "./images/icons8-storm-with-heavy-rain-48.png";
        desc = "Heavy Storm";
        
    }
    
    else if(data.weather[0].main === "Rain" || Math.round(data.rain) >= 10){
        imageUrl = "./images/icons8-heavy-rain-48.png";
        desc = "Rainy";
        
    }
    else if(data.weather[0].main === "Rain" || Math.round(data.rain) < 10){
        imageUrl = "./images/icons8-light-rain-48.png";
        desc = "Light Rain";
        
    }
    else if(data.weather[0].main === "Cloud" || Math.round(data.clouds) >= 65){
        imageUrl = "./images/icons8-cloud-48.png";
        desc = "Cloudy";
        
    }
    else if(data.weather[0].main === "Haze" || Math.round(data.clouds) >= 65){
        imageUrl = "./images/icons8-haze-48.png";
        desc = "Haze";
        
    }
    else{
        imageUrl = "./images/icons8-partly-cloudy-day-48.png";
        desc = "Partially Cloudy";

    }
    let info = [imageUrl,desc];
    return info;
}



//  {
//     "coord": {
//         "lon": 72.8479,
//         "lat": 19.0144
//     },
//     "weather": [
//         {
//             "id": 721,
//             "main": "Haze",
//             "description": "haze",
//             "icon": "50d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 28.99,
//         "feels_like": 35.61,
//         "temp_min": 28.94,
//         "temp_max": 28.99,
//         "pressure": 1009,
//         "humidity": 84
//     },
//     "visibility": 3000,
//     "wind": {
//         "speed": 4.63,
//         "deg": 240,
//         "gust": 9.77
//     },
//     "clouds": {
//         "all": 75
//     },
//     "dt": 1691233147,
//     "sys": {
//         "type": 1,
//         "id": 9052,
//         "country": "IN",
//         "sunrise": 1691196395,
//         "sunset": 1691242962
//     },
//     "timezone": 19800,
//     "id": 1275339,
//     "name": "Mumbai",
//     "cod": 200
// }