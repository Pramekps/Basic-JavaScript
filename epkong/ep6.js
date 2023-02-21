sum = (...numberArr)=> {
    let total = 0
    for(let number of numberArr)
    {
        total += number
    }
    return total
}
console.log(sum(500,100,600))