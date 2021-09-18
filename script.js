// contents:::::::::::::::::::::::::::::::::::
// classes to select from:
// location // temperature // tempFormatBtn // celsius // fahrenheit //description // h2 // searchBtn // futureTemp
// --------------------------------------------
//IDs :
// searchForm // cityName //5dayFurureTemp
// ---------------------------------------------


let location = document.querySelector('.location');
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let tempFormatBtn = document.querySelector('.tempFormatBtn');
let c = document.querySelector('.celsius');
let f = document.querySelector('.fahrenheit')


loadCities();
//loads cities on refresh from local storage
function loadCities(){
  var savedCitiesArray = JSON.parse(localStorage.getItem("savedCities")) || [];
  for (var i = 0; i < savedCitiesArray.length; i++) {
    console.log(savedCitiesArray)
    $('#recent-cities').append("<li><button>"+(savedCitiesArray[i])+"</button></li>");
  }
    $('#recent-cities li button').on("click", function(){
      var city = this.textContent;
      search(city);
      console.log("city is getting clicked! what is happening?")
}
)};


// fetch(api)

//prevent form from reloading the screen
$('#search-form').submit(function(e){
    e.preventDefault()
})

// grab value from form
$('#search-btn').click((event) =>{
event.preventDefault()
city = $('#city-name').val().toLowerCase()

console.log(city)

// if no value entered for city, then exit
if (!city){
return;
}

// run search city (1st api)
search(city);

//clear city form value
$('#city-name').val('')
})
});


// async function api call for city search
async function search(city) {

try {

  const url = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey = config.OPEN_WEATHER_API_KEY

  let response = await axios.get(url, {
      params: {
      q: city,
      appid: apiKey,
      }
    })
    console.log(response.data)
    displayResults(response.data)

  } catch (error) {
    alert('Please enter a valid city')
  }
}


function displayResults(weatherData) {

    //run saveCity function
    saveCity(city);

    //show containers
      showItems();
    //hide icons if function is run again
      hideIcons();
    //get current date
      getDate();

 //display city
    $('#city').text(`${weatherData.name},   {weatherData.   sys.country}`)    
 //display status
    let status = `${weatherData.weather[0].description}`
    $('#today-status').text(status)

    // convert temperature from kelvin to farenheit
    function convertToF(kelvin) {
    let celcius = kelvin - 273
    let farenheit = celcius * (9/5) + 32
    return Math.floor(farenheit)
    }

    //display current temperature
    const currentTemp = convertToF(weatherData.main.temp)
    $('#today-temp').html(`${currentTemp}°F`)

    //display current Humidity
    $('#today-humidity').text(`Humidity: ${weatherData.  main.humidity}%`)
    //display current windspeed
    $('#today-windspeed').text(`Windspeed: ${weatherData.    wind.speed}mph`)

    let lat = `${weatherData.coord.lat}`;
    let lon = `${weatherData.coord.lon}`;

    getForecast(lat,lon)


    function saveCity(city){
        let savedCity = city;
        var savedCitiesArray = JSON.parse(localStorage.getItem("savedCities")) || [];
      
        if (!savedCitiesArray.includes(savedCity)){
        savedCitiesArray.push(savedCity);
        localStorage.setItem("savedCities", JSON.stringify(savedCitiesArray));
      }
      //add button for saved city and when click run it
        $('#recent-cities').append("<li><button>"+(savedCity)+"</button></li>");
      }
      
      // pull in today's date
      function getDate(){
        var todayDate = moment().format("dddd, MMMM Do h:mm a");
        $("#current-date").text(todayDate);
      };
      
      //runs the search on the hit city
      function runSavedCity(city) {
          search(city);
      };
      