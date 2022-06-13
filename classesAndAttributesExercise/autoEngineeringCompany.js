function carFactory(arr) {
    let result = new Map();
    for (let car of arr) {
        let [carBrand, carModel, producedCars] = car.split(' | ');
        let models = new Map();
        if (result.has(carBrand)) {
            models = result.get(carBrand);
            if (models.has(carModel)) {
                producedCars = Number(models.get(carModel)) + Number(producedCars);
            }
            models.set(carModel, producedCars)

        } else {
            models.set(carModel, producedCars)
            result.set(carBrand, models)
        }

    }
    for (let [brand, model] of result.entries()) {
        console.log(brand)
        for (let [name, quantity] of model.entries()) {
            console.log(`###${name} -> ${quantity}`)
        }
    }

}
carFactory(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)