const {expect} = require('chai');
const {isOddOrEven} = require('./evenOrOdd')

describe('Tests', () => {
    it('not a string',()=> {
        expect(isOddOrEven(['a', 'b', 'c'])).to.be.undefined
        expect(isOddOrEven({'a':1})).to.be.undefined
    });
    it('even string',()=> {
        expect(isOddOrEven('abcd')).to.equal('even')
        expect(isOddOrEven('')).to.equal('even')
    });
    it('odd string',()=> {
        expect(isOddOrEven('abc')).to.equal('odd')
        expect(isOddOrEven('a')).to.equal('odd')
    })
})