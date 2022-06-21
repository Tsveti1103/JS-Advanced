const { expect } = require('Chai')
const { numberOperations } = require('./numberOperations')

describe("Tests for numberOperations", function () {
    describe("powNumber", () => {
        it("Happy case", () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(-2)).to.equal(4);
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
    });

    describe("numberChecker …", function () {
        it("Happy case", function () {
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('199')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');

        });
        it("Error case", function () {
            expect(() => numberOperations.numberChecker('str')).throw('The input is not a number!');
            expect(() => numberOperations.numberChecker({ '5': 5 })).throw('The input is not a number!');
        });
    });

    describe("sumArrays …", function () {
        it("Happy case", function () {
            expect(numberOperations.sumArrays([0, 1, 2], [0, 1, 2])).to.deep.equal([0, 2, 4]);
            expect(numberOperations.sumArrays([5], [5])).to.deep.equal([10]);
            expect(numberOperations.sumArrays([5,3], [5])).to.deep.equal([10,3]);
            expect(numberOperations.sumArrays([5], [5,3])).to.deep.equal([10,3]);

        });
    });

});
