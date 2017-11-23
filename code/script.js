
fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=3c91b0161e9dafd6c675a2f230453cef").then((response) => {
  return response.json()
}).then((json) => {
  console.log(json)
  console.log(json.name)
  document.getElementById("city").innerHTML = json.name;
  console.log(json.main.temp)
  document.getElementById("temp").innerHTML = json.main.temp;
  if (temp < 0) {
    document.getElementById("wrapper").className = "freezing";
  } else if ( 0 <= temp && temp <= 13 ) {
    document.getElementById("wrapper").className = "cool";
  } else {
    document.getElementById("wrapper").className = "warm";
  }
  console.log(json.weather[0].main)
  document.getElementById("weather").innerHTML = json.weather[0].main;
})





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
