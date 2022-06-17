class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.avalableProducts = [];
    }
    findProductByType(type, message) {
        for (let prd of this.avalableProducts) {
            if (prd.type == type) {
                return prd;
            }
        }
        if (message) { throw new Error(message); }

    }
    loadingVegetables(vegetables) {
        let newProducts = [];
        for (let vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            if (!newProducts.includes(type)) {
                newProducts.push(type);
            }
            quantity = Number(quantity);
            price = Number(price);
            let product = this.findProductByType(type)
            if (product) {
                product.quantity += quantity;
                if (price > product.price) {
                    product.price = price;
                }
            } else {
                this.avalableProducts.push({ type, quantity, price });
            }
        }
        return `Successfully added ${newProducts.join(', ')}`
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let prd of selectedProducts) {
            let [type, quantity] = prd.split(' ');
            quantity = Number(quantity);
            let product = this.findProductByType(type, `${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            if (quantity > product.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += (quantity * product.price);
            product.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {
        let product = this.findProductByType(type, `${type} is not available in the store.`);
        if (quantity > product.quantity) {
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }
        product.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`
    }
    revision() {
        let result = 'Available vegetables:\n'
        this.avalableProducts = this.avalableProducts.sort((a, b) => a.price - b.price)
        for (let prd of this.avalableProducts) {
            result += `${prd.type}-${prd.quantity}-$${prd.price}\n`
        }
        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
