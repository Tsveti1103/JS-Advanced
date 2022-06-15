const { expect } = require('chai')
const { rentCar } = require('./rentCar')


describe("Tests for rent car", function () {
    it("Test search car 'Invalid input!' case", () => {
        expect(() => rentCar.searchCar('str', 'str')).throw(`Invalid input!`);
        expect(() => rentCar.searchCar([], 5)).throw(`Invalid input!`);
        expect(() => rentCar.searchCar('str', 5)).throw(`Invalid input!`);
    });
    it("Test search car 'There are no such models in the catalog!' case", () => {
        expect(() => rentCar.searchCar(['str', 'str2'], 'str3')).throw(`There are no such models in the catalog!`);
        expect(() => rentCar.searchCar([], "str")).throw(`There are no such models in the catalog!`);
        expect(() => rentCar.searchCar(['str'], 'str2')).throw(`There are no such models in the catalog!`);
    });
    it("Test search car 'Invalid input!' case", () => {
        expect(() => rentCar.searchCar('str', 'str')).throw(`Invalid input!`);
        expect(() => rentCar.searchCar([], 5)).throw(`Invalid input!`);
        expect(() => rentCar.searchCar('str', 5)).throw(`Invalid input!`);
    });
    it("Test search car success case", () => {
        expect(rentCar.searchCar(['str', 'str2'], 'str')).to.equal(`There is 1 car of model str in the catalog!`);
        expect(rentCar.searchCar(['str', 'str2', 'str', 'str'], 'str')).to.equal(`There is 3 car of model str in the catalog!`);
    });

    it("Test calculate price of car 'Invalid input!' case", () => {
        expect(() => rentCar.calculatePriceOfCar('str', 'str')).throw(`Invalid input!`);
        expect(() => rentCar.calculatePriceOfCar('str', 5.5)).throw(`Invalid input!`);
        expect(() => rentCar.calculatePriceOfCar(5, 5)).throw(`Invalid input!`);
    });
    it("Test calculate price of car 'No such model in the catalog! case", () => {
        expect(() => rentCar.calculatePriceOfCar('str', 1)).throw(`No such model in the catalog!`);
        expect(() => rentCar.calculatePriceOfCar('alabala', 0)).throw(`No such model in the catalog!`);
        expect(() => rentCar.calculatePriceOfCar('5', 5)).throw(`No such model in the catalog!`);
    });
    it("Test calculate price of car success case", () => {
        expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equal(`You choose Audi and it will cost $36!`);
        expect(rentCar.calculatePriceOfCar('Toyota', 5)).to.equal(`You choose Toyota and it will cost $200!`);
        expect(rentCar.calculatePriceOfCar('Volkswagen', 8)).to.equal(`You choose Volkswagen and it will cost $160!`);
        expect(rentCar.calculatePriceOfCar('BMW', 4)).to.equal(`You choose BMW and it will cost $180!`);
        expect(rentCar.calculatePriceOfCar('Mercedes', 10)).to.equal(`You choose Mercedes and it will cost $500!`);
    });

    it("Test check budget 'Invalid input! case", () => {
        expect(() => rentCar.checkBudget('str', 'str', 'str')).throw(`Invalid input!`);
        expect(() => rentCar.checkBudget('str', 5, 5)).throw(`Invalid input!`);
        expect(() => rentCar.checkBudget(5, 5, 'str')).throw(`Invalid input!`);
        expect(() => rentCar.checkBudget(5, 'str', 5)).throw(`Invalid input!`);
        expect(() => rentCar.checkBudget(5.5, 5, 5)).throw(`Invalid input!`);
        expect(() => rentCar.checkBudget(5, 5, 5.5)).throw(`Invalid input!`);
        expect(() => rentCar.checkBudget(5, 5.5, 5)).throw(`Invalid input!`);
    });
    it("Test check budget 'You need a bigger budget!' case", () => {
        expect(rentCar.checkBudget(5, 5, 5)).to.equal(`You need a bigger budget!`);
        expect(rentCar.checkBudget(10, 10, 99)).to.equal(`You need a bigger budget!`);

    });
    it("Test check budget success case", () => {
        expect(rentCar.checkBudget(5, 5, 55)).to.equal(`You rent a car!`);
        expect(rentCar.checkBudget(10, 10, 100)).to.equal(`You rent a car!`);

    });

});
