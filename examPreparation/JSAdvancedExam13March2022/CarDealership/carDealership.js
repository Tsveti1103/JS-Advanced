class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model == '' || !Number.isInteger(horsepower) || typeof price != 'number' || typeof mileage != 'number' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!")
        }
        this.availableCars.push({ model, horsepower, price, mileage })
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`

    }
    sellCar(model, desiredMileage) {
        let theCar;
        for (let car of this.availableCars) {
            if (car.model == model) {
                theCar = car;
                break;
            }
            throw new Error(`${model} was not found!`)
        }
        let soldPrice;
        if (desiredMileage >= theCar.mileage) {
            soldPrice = theCar.price
        }
        else if (theCar.mileage - desiredMileage <= 40000) {
            soldPrice = 0.95 * theCar.price
        }
        else {
            soldPrice = 0.9 * theCar.price
        }
        this.availableCars = this.availableCars.filter(el => (el.model != theCar.model))
        let horsepower = theCar.horsepower
        this.soldCars.push({ model, horsepower, soldPrice });
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`

    }
    currentCar() {
        let result = ''
        if (this.availableCars.length == 0) {
            result = "There are no available cars"
        } else {
            let cars = []
            result += '-Available cars:\n'
            for (let car of this.availableCars) {
                cars.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
            }
            result += `${cars.join('\n')}`
        }
        return result;
    }
    salesReport(criteria) {
        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => (b.horsepower - a.horsepower))
        }
        else if (criteria == 'model') {
            this.soldCars.sort((a, b) => ((a.model).localeCompare(b.model)))
        }
        else {
            throw new Error("Invalid criteria!")
        }
        let sold = [];
        let result = '';
        for (let car of this.soldCars) {
            sold.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
        }
        result += `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`
        result += `-${this.soldCars.length} cars sold:\n`
        result += `${sold.join('\n')}`
        return result
    }

}



let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));




