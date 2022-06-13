let { expect } = require('chai')
let { PaymentPackage } = require('./paymentPackage')


describe("Tests for the payment package", () => {
    it("name errors", () => {
        expect(() => new PaymentPackage('')).throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(5, 'abc')).throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({ '5': 5 }, 'abc')).throw('Name must be a non-empty string');
    });
    it("name success", () => {
        test = new PaymentPackage('Hi', 5)
        expect(test.name).to.equal('Hi');
    });

    it("value errors", () => {
        expect(() => new PaymentPackage('abc', -10)).throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('5', 'abc')).throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('{5:5}', '')).throw('Value must be a non-negative number');
    });
    it("value success", () => {
        test = new PaymentPackage('Hi', 5);
        expect(test.value).to.equal(5);
        test2 = new PaymentPackage('Hi', 0);
        expect(test2.value).to.equal(0);
    });

    it("VAT errors", () => {
        test = new PaymentPackage('Hi', 5);
        expect(() => test.VAT = -1).throw('VAT must be a non-negative number');
        expect(() => test.VAT = '51').throw('VAT must be a non-negative number');
        expect(() => test.VAT = '').throw('VAT must be a non-negative number');
    });

    it("VAT success", () => {
        test = new PaymentPackage('Hi', 5);
        expect(test.VAT).to.equal(20);
        test.VAT = 30
        expect(test.VAT).to.equal(30);
        test.VAT = 0
        expect(test.VAT).to.equal(0);
    });

    it("active errors", () => {
        test = new PaymentPackage('Hi', 5);
        expect(() => test.active = -1).throw('Active status must be a boolean');
        expect(() => test.active = '51').throw('Active status must be a boolean');
        expect(() => test.active = '').throw('Active status must be a boolean');
    });

    it("active success", () => {
        test = new PaymentPackage('Hi', 5);
        expect(test.active).to.equal(true);
        test.active = false;
        expect(test.active).to.equal(false); (30);
    });

    it("test to string method", () => {
        test = new PaymentPackage('Hi', 10);
        expect(test.toString()).to.equal(`Package: Hi\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12`)
        test2 = new PaymentPackage('Hi', 100);
        test2.active = false;
        expect(test2.toString()).to.equal(`Package: Hi (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`)
    })
});
