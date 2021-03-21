const toFahrenheit = 1;
const toCelsius = 2;

function getConvertedTemperature(choice,temperature){
    switch(choice){
        case toFahrenheit:
            console.log("You selected-> Convert Celsius to Fahrenheit");
            return (temperature*(9/5)) +32;
        case toCelsius:
            console.log("You selected-> Convert Fahrenheit to Cahrenheit");
            return ((temperature-32)*5/9);
    }
}

let choice = (Math.floor(Math.random()*10)%2) + 1;
let temperature = 1;
if(choice == 1){
    temperature = Math.floor(Math.random()*100); 
    console.log("Selected Celsius Temp: "+temperature+ ' C');
}
if(choice == 2){
    temperature = Math.floor(Math.random()*180)+32;
    console.log("Selected Fahrenheit Temp: "+temperature+ ' K');
}
let convertedTemperature = getConvertedTemperature(choice,temperature);
console.log("Converted temperature = "+convertedTemperature);