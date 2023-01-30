
function toCelsius(fahrenheit)
{
    let c = (fahrenheit-32)/9*5
    return c.toFixed(2)+ " °C" 
}
function getdata(){
    toCelsius(prompt("What is the temperature?"))
}
function senddata(){
    document.getElementById("result").innerHTML = getdata()

}
function toCelsiusProgram(value){
    alert(toCelsius(value))
}
