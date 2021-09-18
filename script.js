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

//LOADS CITYS INTO SEARCH
loadCities();
//loads cities from local storage -------- /////savedCities//////
function loadCities(){
  var savedCitiesArr = JSON.parse(localStorage.getItem("savedCities")) || [];
  for (var i = 0; i < savedCitiesArr.length; i++) {
    console.log(savedCitiesArr)
}
}


// fetch(api) // STILL NEED 
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//prevent form from reloading the screen
$('#search-form').submit(function(e){
    e.preventDefault()
})

// value of form -------------------------------
$('formContainer').click((event) =>{
event.preventDefault()
city = $('#city-name').val().toLowerCase()

console.log(city)

// search city -------------------------------
search(city);
