console.log("hello Prame")
console.log("hello Prame")
console.log("hello Prame")
var age = (4+2*2/2*2+4+1-5+19)+91
var name =  "Prame"
var FirstName = "Utcha"
var LastName = "Kruepunsak"
console.log(age)  
console.log(typeof age) 
console.log(FirstName)
console.log(LastName)
//alert(FirstName +" "+ LastName)
var x = 20
{
    var x = 2
}
let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ")
let random = document.getElementById("random").innerHTML = Math.floor(Math.random()*10)
if (lotto_number == random){
    document.getElementById("result").innerHTML = "คุณถูกรางวัล"
}
else{
    document.getElementById("result").innerHTML = "คุณไม่ถูกรางวัล"
}