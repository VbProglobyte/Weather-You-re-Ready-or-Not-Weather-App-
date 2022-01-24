let searchHistory = JSON.parse(localStorage
  .getItem("cities")
) || [];

//Listens for click event = search button
$("#searchButton").on("click", function () {
  let searchData = $("#city-input").val().trim();

  callWeatherTemps(searchData);
});
// //////////////////////////////////////////////////////////////////// MAIN WEATHER FUNCTION
//One day function API Call - new key for different API
function callWeatherTemps(city) {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=6ec271a7eaa197efb35f9b736da2f3eb";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    searchHistory.unshift(response.name);

    //Removes Duplicates from the searchHistory - local storage works now
    searchHistory = Array.from(new Set(searchHistory));
    localStorage.setItem("cities", JSON.stringify(searchHistory));
    displaySearchHistory(searchHistory);

    //Empty weather-append div when button is pressed
    $("#append-weather").empty();
    //Fahrenheit from Kelvin /////////////////TEMP
    let fahrenheit = (
      (parseInt(response.main.temp - 273.15) * 9) / 5 +
      32
    ).toFixed() + " F";
    //Grabs Humidity from response //////////////////////////// HUMIDITY
    let humidity = response.main.humidity + "%";
    //Grabs wind from response ////////////////////////////////// WIND
    let wind = response.wind.speed;
    //Creates the card for the current weather ////////////////////////////// CURRENT DAY
    let cardBody = $("<div>").addClass("card-body");
    let cardTitle = $("<h3>")
      .addClass("card-title")
      .text(response.name + " " + new Date().toLocaleDateString());

    //appends weather icons from the api
    cardTitle.append(
      '<img src="http://openweathermap.org/img/wn/' +
      response.weather[0].icon +
      '.png" >'
    );
    // ////////////////////////////////////////////////////////////// details for 5day

    let cardTemp = $("<p>").text("Temperature: " + fahrenheit);
    let cardHumidity = $("<p>").text("Humidity: " + humidity);
    let cardWind = $("<p>").text("Wind Speed: " + wind);

    //Appends Weather to cards - make card in html
    $("#append-weather").append(
      cardBody,
      cardTitle,
      cardTemp,
      cardHumidity,
      cardWind
    );
    // CALLS FOR COORDINATES 
    callUVIndex(response.coord.lat, response.coord.lon);
    callFiveDay(response.coord.lat, response.coord.lon);
  });
}

//New API call for the UV index /////////////////////////////////
// couldnt figure out how to display on the 5day 
function callUVIndex(lat, lon) {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/uvi?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=6ec271a7eaa197efb35f9b736da2f3eb";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //Adds the UV 
    let uv = response.value;
    let cardUV = $("<p>").text("UV Index: " + uv);
    $("#append-weather").append(cardUV);
  });
}

//New API call to get the 5 day forecast ////////////////////////////////
function callFiveDay(lat, lon) {
  let queryURL =
    " https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=6ec271a7eaa197efb35f9b736da2f3eb";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    let dayArray = response.daily;

    //empty results
    $("#append-five").empty();


    for (let i = 0; i < 5; i++) {
      let forecastWeather = dayArray[i + 1];
      let date = new Date(forecastWeather.dt * 1000);
      let fahrenheit = (
        (parseInt(forecastWeather.temp.day - 273.15) * 9) / 5 +
        32
      ).toFixed() + " F"; // changed to fahrenheight 
      // couldnt get the button converter to work 

      let cardBody = $("<div>").addClass("card-body");
      let cardTitle = $("<h3>")
        .addClass("card-title")
        .text(date.toLocaleDateString());

      //Appends icon to the 5day forecase.
      cardTitle.append(
        '<img src="http://openweathermap.org/img/wn/' +
        forecastWeather.weather[0].icon +
        '.png" >'
      );
      let cardTemp = $("<p>").text("Temperature: " + fahrenheit);

      $("#append-five").append(cardBody, cardTitle, cardTemp);
    }
  });
}

//Display the search history of preveious city searches
function displaySearchHistory(cities) {

  //Empty search history
  $("#search-history").empty();
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    let li = $("<li>").addClass("list-group-item").text(city);
    li.on("click", function () {
      callWeatherTemps(city);
    });
    $("#search-history").append(li); // search
  }
}
// //////////////////////////////////////////////////////
displaySearchHistory(searchHistory);