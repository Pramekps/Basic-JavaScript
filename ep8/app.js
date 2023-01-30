function toCelsius(fahrenheit)
{
    let c = (fahrenheit-32)/9*5
    return c.toFixed(2)+ " °C" 
}

document.getElementById("result").innerHTML = toCelsius(prompt("What is the temperature?"))