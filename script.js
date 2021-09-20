// contents:::::::::::::::::::::::::::::::::::
// classes to select from:
// location // temperature // tempFormatBtn // celsius // fahrenheit //description // h2 // searchBtn // futureTemp
// --------------------------------------------
//IDs :
// searchForm // cityName // 
//5 day :
// futDay1(2,3,4,5) // futWeather-icon1(2,3,4,5) // futTemp(2,3,4,5) // futStatus(2,3,4,5) // futHumidity(2,3,4,5)
// ---------------------------------------------

// 
// {bfac35a66cb8ed1f07b834b4a00c9efb}
// 

// API key 
const myKey = "bfac35a66cb8ed1f07b834b4a00c9efb";

//query Selectors ----------------------------------------------
const searchForm = document.querySelector("#searchForm");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".windSpeed");
let uvi = document.querySelector(".uvi");
let location = document.querySelector('.location');
// let cityName = document.querySelector('.cityName');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let tempFormatBtn = document.querySelector('.tempFormatBtn');
let c = document.querySelector('.celsius');
let f = document.querySelector('.fahrenheit')
let cityName = "";
let coords = [];
let response;

// 5day =========================================
let futDay1 = document.querySelector("#futDay1");
let futDay2 = document.querySelector("#futDay2");
let futDay3 = document.querySelector("#futDay3");
let futDay4 = document.querySelector("#futDay4");
let futDay5 = document.querySelector("#futDay5");

let futWeather1 = document.querySelector("#futWeather1");
let futWeather2 = document.querySelector("#futWeather2");
let futWeather3 = document.querySelector("#futWeather3");
let futWeather4 = document.querySelector("#futWeather4");
let futWeather5 = document.querySelector("#futWeather5");

let futTemp1 = document.querySelector("#futTemp1");
let futTemp2 = document.querySelector("#futTemp2");
let futTemp3 = document.querySelector("#futTemp3");
let futTemp4 = document.querySelector("#futTemp4");
let futTemp5 = document.querySelector("#futTemp5");

// ---------------------------------------------------------------
//HIDE all items
function hideAll(){
  $('.location').hide();
  $('.today-container').hide();
  $('#forecast-container').hide();
  $('#forecast-title').hide();
}

// fetch(api)
// CITYS INTO SEARCH
function search(cityName) {
  let cityapiURL = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={myKey}`;
  fetch(cityapiURL) //fetching API - LAT&LONG
      .then(function (response) { //RESPONSE
          return response.json();
      })
      .then(function (data) { //DATA
          // convert into city name from data
          cityName = data.name;
          coords = [];
          coords.push(data.coord.lat);
          coords.push(data.coord.lon);
          saveSearch(cityName);
          renderWeather(coords);
            for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
      });
}




// run SEARCH
search(city);

// value of form -------------------------------
$('formContainer').click((event) =>{
event.preventDefault()
city = $('#cityName').val().toLowerCase()

console.log(cityName)

// search city -------------------------------
search(cityName);
