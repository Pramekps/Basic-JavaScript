let grade = prompt("ํYour Grade")
if (grade == 4) {
    document.getElementById("result").innerHTML = "A"
}
else if (grade >= 3.5 & grade < 4) {
    document.getElementById("result").innerHTML = "B+"
}
else if (grade >= 3 & grade < 3.5) {
    document.getElementById("result").innerHTML = "B"
}
else if (grade >= 2.5 & grade < 3) {
    document.getElementById("result").innerHTML = "C+"
}
else if (grade >= 2 & grade < 2.5) {
    document.getElementById("result").innerHTML = "C"
}
else if (grade >= 1.5 & grade < 2) {
    document.getElementById("result".innerHTML) = "D+"
}
else if (grade >= 1 & grade < 1.5) {
    document.getElementById("result").innerHTML = "D"
}
else if (grade >= 0 & grade < 1) {
    document.getElementById("result").innerHTML = "F"
}
else {
    document.getElementById("result").innerHTML = "Not Match"
}