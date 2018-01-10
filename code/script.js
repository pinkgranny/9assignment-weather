const baseTemp = 0;
const midTemp = 13;

fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=3c91b0161e9dafd6c675a2f230453cef").then((response) => {
  return response.json()
}).then((json) => {
  console.log(json)

  console.log(json.name)
  document.getElementById("city").innerHTML = json.name;

  console.log(json.main.temp)
  document.getElementById("temp").innerHTML = json.main.temp + ' &#176;C';
  const temperature = json.main.temp;
  if (temperature < baseTemp) {
    // document.getElementById("fred").src = "https://static.boredpanda.com/blog/wp-content/uploads/2016/02/cute-baby-polar-bear-day-photography-14__880.jpg";
    console.log('fred is here');
    document.getElementById("container").className = "main-freezing";
    document.getElementById("weather-description").className = "freezing";
    //     console.log('helloolooooo');
    // document.getElementById("wrapper").className = "freezing";
  }
  else if ( baseTemp <= json.main.temp && json.main.temp <= midTemp) {
        // document.getElementById("fred").src = "http://i.telegraph.co.uk/multimedia/archive/02042/polar-bear-shake_2042566i.jpg";
        document.getElementById("container").className = "main-cool";
    document.getElementById("weather-description").className = "cool";
  //   document.getElementById("wrapper").className = "cool";
  } else {
        // document.getElementById("fred").src = "https://cdn.zmescience.com/wp-content/uploads/2015/01/Polar-Bear-animals-34693849-1440-900.jpg";
  //   // document.getElementById("main-wrapper").className = "main-warm";
  document.getElementById("container").className = "main-warm";
    document.getElementById("weather-description").className = "warm";
  }
  console.log(json.weather[0].main)
  // const weather = json.weather[0].main;
  document.getElementById("weather").innerHTML = json.weather[0].main;
})

// fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=3c91b0161e9dafd6c675a2f230453cef").then((response) => {
//   return response.json()
// }).then((json) => {
//   console.log(json)
//
//   console.log(json.name)
//   const city = json.name;
//   document.getElementById("city").innerHTML = json.name;
//
//   console.log(json.main.temp)
//   document.getElementById("temp").innerHTML = json.main.temp;
//   const temperature = json.main.temp;
//   if (temperature < 0) {
//     document.getElementById("main-wrapper").className = "main-freezing";
//     document.getElementById("wrapper").className = "freezing";
//   } else if ( 0 <= json.main.temp && json.main.temp <= 13 ) {
//     document.getElementById("main-wrapper").className = "main-cool";
//     document.getElementById("wrapper").className = "cool";
//   } else {
//     document.getElementById("main-wrapper").className = "main-warm";
//     document.getElementById("wrapper").className = "warm";
//   }
//   console.log(json.weather[0].main)
//   const weather = json.weather[0].main;
//   document.getElementById("weather").innerHTML = json.weather[0].main;
// })



// document.getElementById("myDIV").innerHTML = "How are you?";

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed!";
// }

// fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=3c91b0161e9dafd6c675a2f230453cef").then((response) => {
// return response.json()
// }).then((json) => {
// console.log(json.args.pizzaName)
// })

// <!-- Pizzaexample -->
// <!-- const pizza = {
// name: "Pepperoni",
// date: new Date()
// }

// console.log(pizza)

// const pizzaString = JSON.stringify(pizza)
//
// console.log(pizzaString)
//
// const parsedPizzaString = JSON.parse(pizzaString)
//
// console.log(parsedPizzaString)


// {"coord":
//
// {"lon":18.06,"lat":59.33},
//
// "weather":[{"id":803,
// "main":"Clouds",
// "description":"broken clouds","icon":"04d"}],
//
// "base":"stations",
//   "main":{
//     "temp":7.47,
//     "pressure":996,
//     "humidity":87,
//     "temp_min":7,
//     "temp_max":8},
//
// "visibility":10000,
//   "wind":{
//     "speed":6.2,
//     "deg":150},
//
//   "clouds":{
//     "all":75},
//
// "dt":1511432400,
//   "sys":{
//     "type":1,
//     "id":5420,
//     "message":0.002,
//     "country":"SE",
//     "sunrise":1511420495,
//     "sunset":1511445988},
//
// "id":2673730,
// "name":"Stockholm",
// "cod":200
// }
