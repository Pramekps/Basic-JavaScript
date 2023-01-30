let qrt = prompt("Quantity of goods")
var total_price = 0
for (var i = 1; i <= qrt; i++)
{
    let item_price = prompt("ราคาสินค้าชิ้นที่ " + i)
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ " + i + ": " + item_price +" บาท" + "<br>"
    total_price = Number(item_price) + total_price
}
document.getElementById("total-price").innerHTML = "ราคารวม " + total_price