class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer) {
        let firstName = customer.firstName;
        let lastName = customer.lastName;
        let personalId = customer.personalId;
        let customerFound = this.allCustomers.find(c => c.personalId == personalId)
        if (customerFound) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }
        this.allCustomers.push(customer)
        return customer;
    }
    depositMoney(personalId, amount) {
        let customerFound = this.allCustomers.find(c => c.personalId == personalId)
        if (!customerFound) {
            throw new Error(`We have no customer with this ID!`)
        }
        if (!customerFound.hasOwnProperty('totalMoney')) {
            customerFound.totalMoney = 0;
        }
        if (!customerFound.hasOwnProperty('transactions')) {
            customerFound.transactions = [];
        }
        customerFound.totalMoney += amount
        customerFound.transactions.push(`${customerFound.firstName} ${customerFound.lastName} made deposit of ${amount}$!`);
        return `${customerFound.totalMoney}$`

    }
    withdrawMoney(personalId, amount) {
        let customerFound = this.allCustomers.find(c => c.personalId == personalId)
        if (!customerFound) {
            throw new Error(`We have no customer with this ID!`)
        }
        if (!customerFound.hasOwnProperty('totalMoney')) {
            customerFound.totalMoney = 0;
        }
        if (customerFound.totalMoney < amount) {
            throw new Error(`${customerFound.firstName} ${customerFound.lastName} does not have enough money to withdraw that amount!`)
        }
        customerFound.totalMoney -= amount;
        customerFound.transactions.push(`${customerFound.firstName} ${customerFound.lastName} made deposit of ${amount}$!`);
        return `${customerFound.totalMoney}$`
    }
    customerInfo(personalId) {
        let customerFound = this.allCustomers.find(c => c.personalId == personalId)
        if (!customerFound) {
            throw new Error(`We have no customer with this ID!`)
        }
        let result = [];
        result.push(`Bank name: ${this.bankName}`);
        result.push(`Customer name: ${customerFound.firstName} ${customerFound.lastName}`);
        result.push(`Customer ID: ${customerFound.personalId}`);
        result.push(`Total Money: ${customerFound.totalMoney}$`);
        result.push('Transactions:');

        for (let i = customerFound.transactions.length - 1; i >= 0; i--) {
            result.push(`${i + 1}. ${customerFound.transactions[i]}`);
        }

        return result.join('\n');
    }


}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(4151596, 125));
bank.depositMoney(4151596, 1555);
console.log(bank.withdrawMoney(4151596, 1125));

console.log(bank.customerInfo(4151596));

