const { expect } = require('chai')
const { testNumbers } = require('./testNumbers')


describe("Tests testNumbers", function () {
    describe("sumNumbers", function () {
        it("happy case", function () {
            expect(testNumbers.sumNumbers(2, 5)).equal('7.00')
            expect(testNumbers.sumNumbers(2.8, 5.2)).equal('8.00')
            expect(testNumbers.sumNumbers(0, 0)).equal('0.00')
        });

        it("undefined", function () {
            expect(testNumbers.sumNumbers('asd', 5)).equal(undefined)
            expect(testNumbers.sumNumbers(5, 'asd')).equal(undefined)
            expect(testNumbers.sumNumbers('str', 'asd')).equal(undefined)
        });
    });

    describe("numberChecker", function () {
        it("happy case", function () {
            expect(testNumbers.numberChecker(2)).equal('The number is even!')
            expect(testNumbers.numberChecker('2')).equal('The number is even!')
            expect(testNumbers.numberChecker(0)).equal('The number is even!')
            expect(testNumbers.numberChecker(1.5)).equal('The number is odd!')
            expect(testNumbers.numberChecker(1.6)).equal('The number is odd!')
            expect(testNumbers.numberChecker('3')).equal('The number is odd!')
            expect(testNumbers.numberChecker(3)).equal('The number is odd!')
        });
        it("not a number", function () {
            expect(() => testNumbers.numberChecker('str')).throw('The input is not a number!')
            expect(() => testNumbers.numberChecker({ 'asd': 6 })).throw('The input is not a number!')
        });
    });

    describe("averageSumArray", function () {
        it("happy case", function () {
            expect(testNumbers.averageSumArray([1, 2, 3])).equal(2)
            expect(testNumbers.averageSumArray([2, 2, 2, 2, 2, 2])).equal(2)
        });
    });

});
