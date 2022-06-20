class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = []
    }

    loadProducts(products) {
        for (let currentProduct of products) {
            let [productName, productQuantity, productTotalPrice] = currentProduct.split(' ')
            productQuantity = Number(productQuantity)
            productTotalPrice = Number(productTotalPrice)
            if (productTotalPrice <= this.budgetMoney) {
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
                this.budgetMoney -= productTotalPrice
                if (productName in this.stockProducts) {
                    this.stockProducts[productName] = + productQuantity;
                }
                else {
                    this.stockProducts[productName] = productQuantity;
                }
            }
            else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)

            }
        }
        return this.history.join('\n')
    }
    addToMenu(meal, products, price) {
        if (!(meal in this.menu)) {
            this.menu[meal] = { products, price }
            this.mealsCount += 1;
            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }
            else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        }
        else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }
    showTheMenu() {
        let result = [];
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        }
        for (let meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}`)
        }
        return result.join('\n')
    }
    makeTheOrder(meal) {
        if (!(meal in this.menu)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let mealProducts = this.menu[meal].products
        for (let product of mealProducts) {
            let [name, quantity] = product.split(' ')
            quantity = Number(quantity);
            if (!(name in this.stockProducts) || this.stockProducts[name] < quantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
        for (let product of mealProducts) {
            let [name, quantity] = product.split(' ')
            this.stockProducts[name] -= quantity
        }
        this.budgetMoney += this.menu[meal].price
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }

}

