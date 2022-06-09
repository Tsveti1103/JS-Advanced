const { expect } = require('chai');
const { sum } = require('./sumOfNumbers');

describe('sumOfNumbers', () => {
    it('work with positive numbers', () => {
        expect(sum([2, 2, 3])).to.equal(7);
    });
    it('work with negative numbers', () => {
        expect(sum([-2, -2, -3])).to.equal(-7);
    });
    it('work with zeros', () => {
        expect(sum([0, 0, 0])).to.equal(0);
    });
    it('work with string', () => {
        expect(isNaN(sum(['a', 'b']))).to.equal(true);
    });
})