function lowestPricesInCities(input){
    let result = {}
    for (let i = 0; i < input.length; i++){
        let [town,product,price] = input[i].split(' | ');
        price = Number(price);
        if (result[product]){
            if (result[product].price>price){
                result[product] = {town,price}

            }
        }
        else{
            result[product] = {town,price}
        }
    }
    let productName = Object.keys(result)
    for (let i = 0; i < productName.length; i++){
        console.log(`${productName[i]} -> ${result[productName[i]].price} (${result[productName[i]].town})`)
    }
   
    }

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)