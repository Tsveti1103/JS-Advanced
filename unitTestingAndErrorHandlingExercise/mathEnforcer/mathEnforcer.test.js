const { expect } = require("chai");
const { mathEnforcer } = require("./mathEnforcer")

describe("Tests for mathEnforcer", () => {
    it('add five success', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
        expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        expect(mathEnforcer.addFive(0)).to.equal(5);
    });
    it('add five parameter is not a number', () => {
        expect(mathEnforcer.addFive('5')).to.be.undefined;
        expect(mathEnforcer.addFive({ '5': 5 })).to.be.undefined;
        expect(mathEnforcer.addFive(true)).to.be.undefined;
    });

    it('subtract ten success', () => {
        expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        expect(mathEnforcer.subtractTen(0)).to.equal(-10);
    });
    it('subtract ten parameter is not a number', () => {
        expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        expect(mathEnforcer.subtractTen({ '5': 5 })).to.be.undefined;
        expect(mathEnforcer.subtractTen(false)).to.be.undefined;
    });

    it('sum success', () => {
        expect(mathEnforcer.sum(5, 5)).to.equal(10);
        expect(mathEnforcer.sum(10.5, 0.53)).to.equal(11.03);
        expect(mathEnforcer.sum(-5, 3)).to.equal(-2);
        expect(mathEnforcer.sum(5, -5)).to.equal(0);
    });
    it('sum some parameter is not a number', () => {
        expect(mathEnforcer.sum('5', 5)).to.be.undefined;
        expect(mathEnforcer.sum(5, { '5': 5 })).to.be.undefined;
        expect(mathEnforcer.sum(false, true)).to.be.undefined;
    });
})
