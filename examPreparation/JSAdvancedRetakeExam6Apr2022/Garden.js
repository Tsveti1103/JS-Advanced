class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.")
        }
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }
    findPlantByName(plantName) {
        let findPlant = this.plants.filter(el => el.plantName == plantName)[0];
        if (findPlant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        return findPlant;
    }

    ripenPlant(plantName, quantity) {
        let findPlant = this.findPlantByName(plantName);

        if (findPlant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        findPlant.ripe = true;
        findPlant.quantity += quantity;
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        }

        if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let findPlant = this.findPlantByName(plantName);
        if (findPlant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.plants = this.plants.filter(el => el.plantName !== plantName);
        let quantity = findPlant.quantity

        this.storage.push({ plantName, quantity })
        this.spaceAvailable += findPlant.spaceRequired;
        return `The ${findPlant.plantName} has been successfully harvested.`
    }
    generateReport() {
        let result = `The garden has ${this.spaceAvailable} free space left.\n`
        this.plants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
        let names = [];
        for (let plant of this.plants) {
            names.push(plant.plantName);
        }
        result += `Plants in the garden: ${names.join(", ")}\n`
        result += `Plants in storage: `
        if (this.storage.length == 0) {
            result += `The storage is empty.`
        }
        else {
            let storagePlants = []
            for (let plant of this.storage) {
                storagePlants.push(`${plant.plantName} (${plant.quantity})`)
            }
            result += storagePlants.join(", ")
        }
        return result;
    }

}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
console.log(myGarden.harvestPlant('orange', 4));
console.log(myGarden.harvestPlant('apple', 5));
console.log(myGarden.generateReport());

