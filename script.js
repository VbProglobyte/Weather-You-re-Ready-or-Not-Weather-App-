// contents:::::::::::::::::::::::::::::::::::
// classes to select from:
// location // temperature // tempFormatBtn // celsius // fahrenheit //description // h2 // searchBtn // futureTemp
// --------------------------------------------
//IDs :
// searchForm // cityName // 
//5 day :
// futDay1(2,3,4,5) // futWeather-icon1(2,3,4,5) // futTemp(2,3,4,5) // futStatus(2,3,4,5) // futHumidity(2,3,4,5)

// ---------------------------------------------

// const myKey = "bfac35a66cb8ed1f07b834b4a00c9efb";

// const inputVal = input.value;
// const apiURL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=bfac35a66cb8ed1f07b834b4a00c9efb`;
// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={myKey}
// celsius
// https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=metric&appid=bfac35a66cb8ed1f07b834b4a00c9efb
// fahrenheit
// https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=bfac35a66cb8ed1f07b834b4a00c9efb

// event prevent default -------------------------------
// const searchForm = document.querySelector("#searchForm");
// const searchBtn = document.querySelector("searchBtn");


// searchFormEl.addEventListener('searchBtnEl', (event) =>{
//   event.preventDefault(); {
//   $("searchBtn").click((event) => {
//       event.preventDefault();
//       console.log(cityName);
//   })
// }
// $(document).ready(function () {
// fetch(api) ------------------------------------------------------
// CITYS INTO SEARCH
// function search(cityName) {

  // let apiURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={myKey}";
  // let myKey = "bfac35a66cb8ed1f07b834b4a00c9efb";
  // let cityName = "";
  

  let weather = {
    myKey: "bfac35a66cb8ed1f07b834b4a00c9efb",
    // apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" 
    // + myKey" 
    fetchWeather: function (city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
      + city + "&units=metric&appid=" 
      + this.myKey)
        .then((response) => {
          if (!response.ok) {
            alert("oh no...no weather...");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
        displayWeather: function(data) {
          const {name} = data;
          const {icon, description} = data.weather[0];
          const {temp, humidity} = data.main;
          const {speed} = data.wind;
             console.log(name, icon, description, temp, humidity, speed)
            document.querySelector(".location").innerText = name;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"; 
            document.querySelector(".description").innerText = description;
            document.querySelector(".temperature").innerText = temp + "°C";
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".windSpeed").innerText = "Wind speed: " + speed + "mph";
            // document.querySelector(".uvi").innerText = "UV index: " +
            // document.querySelector(".weather").classList.remove("pending")
        },
        search: function () {
          this.fetchWeather(document.querySelector(".cityName").value);
        },
        
    };
    
    document.querySelector(".searchBtn").addEventListener("click", function () {
    weather.search();
  });
  
  // document.querySelector(".cityName")
  
  weather.fetchWeather("dallas");
  
  

// let humidity = document.querySelector(".humidity");
// let windSpeed = document.querySelector(".windSpeed");
// let uvi = document.querySelector(".uvi");
// let location = document.querySelector('.location');
// // let cityName = document.querySelector('.cityName');
// let temperature = document.querySelector('.temperature');
// let description = document.querySelector('.description');
// let tempFormatBtn = document.querySelector('.tempFormatBtn');
// let c = document.querySelector('.celsius');
// let f = document.querySelector('.fahrenheit')
// let cityName = "";
// let coords = [];
// // let response;

// // 5day =========================================
// let futDay1 = document.querySelector("#futDay1");
// let futDay2 = document.querySelector("#futDay2");
// let futDay3 = document.querySelector("#futDay3");
// let futDay4 = document.querySelector("#futDay4");
// let futDay5 = document.querySelector("#futDay5");

// let futWeather1 = document.querySelector("#futWeather1");
// let futWeather2 = document.querySelector("#futWeather2");
// let futWeather3 = document.querySelector("#futWeather3");
// let futWeather4 = document.querySelector("#futWeather4");
// let futWeather5 = document.querySelector("#futWeather5");

// let futTemp1 = document.querySelector("#futTemp1");
// let futTemp2 = document.querySelector("#futTemp2");
// let futTemp3 = document.querySelector("#futTemp3");
// let futTemp4 = document.querySelector("#futTemp4");
// let futTemp5 = document.querySelector("#futTemp5");
