function slove(fruit,weight,price){
    let money = price * weight/1000
    console.log(`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
}

slove('orange', 2500, 1.80)
slove('apple', 1563, 2.35)