const{expect} = require('chai');
const{createCalculator} = require('./addSubtract');

describe('test calculator', () => {
    let calc = createCalculator();
    it('contain a function', () => {
        expect(createCalculator().hasOwnProperty('add')).to.equal(true);
        expect(createCalculator().hasOwnProperty('subtract')).to.equal(true);
        expect(createCalculator().hasOwnProperty('get')).to.equal(true);
    });
    it('value cant be changed', () => {
        let calc = createCalculator();
        expect(calc.value += 4).to.be.NaN;
    });
    it('test add function', () => {
        let calc = createCalculator();
        calc.add('5');
        expect(calc.get()).to.equal(5);
        calc.add(5);
        expect(calc.get()).to.equal(10);
        calc.add('a');
        expect(calc.get()).to.be.NaN;

    });
    it('test subtract function', () => {
        let calc = createCalculator();
        calc.add('10');
        calc.subtract('5');
        expect(calc.get()).to.equal(5);
        calc.subtract(5);
        expect(calc.get()).to.equal(0);
        calc.subtract('a');
        expect(calc.get()).to.be.NaN;
    });
})