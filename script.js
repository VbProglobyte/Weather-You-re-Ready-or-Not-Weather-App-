// let c = document.querySelector('.celsius');
// let f = document.querySelector('.fahrenheit')
// let btn = document.querySelector(button);
//  // Add a click event listener to the button
//  btn.addEventListener ('click', function => {
//      // Find the fahrenheit input field
//      let f = document.querySelector('.fahrenheit'),
//      // Find the celsisus input field
//      let c = document.querySelector('.celsisus'),
//      // Make the calculation from the fahrenheit value.
//      // Save it to the celsisus input field using `c.value`
//      // where `c` is the reference to the celsisus input
//      c.value = parseFloat(f.value) * 1.8 + 32;
     
//  });
// document.querySelector('.fahrenheit').addEventListener('click', displayWeatherFahrenheit)

  // PREVENT DEFAULT FOR WEATHER SEARCH
  $('#searchForm').submit(function(e){
    e.preventDefault()
})

  let weather = {
    myKey: "bfac35a66cb8ed1f07b834b4a00c9efb",
    // apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" 
    // + myKey" 
    fetchWeather: function (city) {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
      + city + "&units=metric&appid=" 
      + this.myKey)
      // , ("api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial&appid=" + this.myKey)
        .then((response) => {
          if (!response.ok) {
            alert("oh no...no weather...");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
        displayWeather: function(data) {
        
              // api pull request ------------------------------------------ID - querySelectors to ID--
          const {name} = data;
          const {icon, description} = data.weather[0];
          const {temp, humidity} = data.main;
          const {speed} = data.wind;
             console.log(name, icon, description, temp, humidity, speed)
            document.querySelector(".location").innerText = name;
            document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + "@2x.png"; 
            document.querySelector(".description").innerText = description;
            document.querySelector(".temperature").innerText = Math.floor(temp) + "°C";
            // Celsius * 1.8 + 32 = Fahrenheit
            // document.querySelector(".temperature").innerText = Math.floor(temp) + "°F";
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
  
  weather.fetchWeather("dallas"); //default city display
   
 
  

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
