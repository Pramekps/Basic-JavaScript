let round = prompt("Count of Round")
var x = 0
for (var i = 1; i <= round; i++)
{
    var answer = prompt("Head or Tail")
    random = Math.floor(Math.random()*10)
    var answer_random = ""
    if(random <= 4){
        answer_random = "head"
    }
    else{
        answer_random = "tail"
    }
    if(answer == answer_random){
        alert("Yeah !!")
        x++
    }
    else{
        alert("Sad!!")
    }
    document.getElementById("game-list").innerHTML += "Your answer is : " + answer + " game answer is : " + answer_random +"<br>"
}
document.getElementById("game-result").innerHTML += "Your answer correct : " + x