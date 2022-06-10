const {expect} = require('chai');
const {lookupChar} = require('./charLookup');

describe('Tests for lookupChar', () =>{
    it('first parameter is not a string', ()=>{
        expect(lookupChar(['a'],5)).to.be.undefined;
    });
    it('second parameter is not a integer', ()=>{
        expect(lookupChar('a',5.3)).to.be.undefined;
        expect(lookupChar('a','5')).to.be.undefined;
        expect(lookupChar('a','a')).to.be.undefined;
    });
    it('incorrect index', ()=>{
        expect(lookupChar('a',-1)).to.equal('Incorrect index');
        expect(lookupChar('a',5)).to.equal('Incorrect index');
    });
    it('return character', ()=>{
        expect(lookupChar('a',0)).to.equal('a');
        expect(lookupChar('abcdef',5)).to.equal('f');
    });

})