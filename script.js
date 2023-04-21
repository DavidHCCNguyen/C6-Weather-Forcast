var weatherKey = "452f5731d954c38ee42f4b3baa8da1d8";
var searchHistory = [];
var searchForm = document.querySelector("#search-form");
var searchValue = document.querySelector("#search-input");
var todayWeather = document.querySelector("#today");
var forcastContainer = document.querySelector("#forecast");
var histroySection = document.querySelector("#history");
var searchBtn = document.querySelector("#search-button");
var apiUrl = "api.openweathermap.org"
// /data/2.5/forecast?q={city name}&appid={API key}

// add previous search in the array using array methods.
searchHistory.push(searchValue.value);
// function to display the search history in a list format. (will create buttons)
function displaySearchHistory() {
  historySection.innerHTML = "";

  searchHistory.forEach(function(search) {
    // creates li as an element
    var li = document.createElement("li");
    // creates burtton as an element
    var button = document.createElement("button");
    // Makes the search a button
    button.textContent = search;
    button.classList.add("btn", "btn-secondary", "mx-1");
    li.appendChild(button);
    historySection.appendChild(li);
  });
}
// have a function to update in the local storage history and update displayed history.
function updateSearchHistory() {
  // forwards history
  searchHistory.push(searchValue.value);
  // adds to local pc storage which then will show in the application
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  // shows history on local storage
  displaySearchHistory();
}

function getWeather(city) {
  var searchQuery = `https://${apiUrl}/data/2.5/forecast?q=${city}&units=metric&appid=${weatherKey}`
  console.log(searchQuery)
  fetch(searchQuery)
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    console.log(data)
    console.log(data.list[0])
    console.log(data.list[0].main.temp)
    console.log(data.list[0].wind.speed)
    // need a callback two functions to two different functions,
    // one function to create a card to todays weather
    // second function to create five cards for the forcast
  })
}

function searchClick(event){
  event.preventDefault();
  var city = searchValue.value.trim()
  console.log(city)
  getWeather(city)
}
// need a function to get search history.
// function to display current wealther data in our html. (createElement, setAttribute, append, textcontent)
// function to display the 5 day forcast.
// function to get the weather data based on location.
// function to handle search.
// function to handle search history click.
// create the search query. (use api to get data based on what user types in search bar)
// view data in the console.

searchForm.addEventListener('submit', searchClick)