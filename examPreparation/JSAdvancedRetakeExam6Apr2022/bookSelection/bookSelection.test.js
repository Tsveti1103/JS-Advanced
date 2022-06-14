const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe("Tests for bookSelection", () => {
    it('test for isGenreSuitable not suitable', () => {
        expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        expect(bookSelection.isGenreSuitable("Thriller", 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
        expect(bookSelection.isGenreSuitable("Horror", 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        expect(bookSelection.isGenreSuitable("Horror", -10)).to.equal(`Books with Horror genre are not suitable for kids at -10 age`);
        expect(bookSelection.isGenreSuitable("Thriller", -10)).to.equal(`Books with Thriller genre are not suitable for kids at -10 age`);
    })
    it('test for isGenreSuitable suitable', () => {
        expect(bookSelection.isGenreSuitable("Kids", 5)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable("AlaBala", -1)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable("Thriller", 13)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable("Horror", 13)).to.equal(`Those books are suitable`);
    })

    it('test for isItAffordable Invalid input', () => {
        expect(() => bookSelection.isItAffordable('10', 5)).throw(`Invalid input`);
        expect(() => bookSelection.isItAffordable(10, '5')).throw(`Invalid input`);
        expect(() => bookSelection.isItAffordable('abf', 'asd')).throw(`Invalid input`);
        expect(() => bookSelection.isItAffordable({ '5.5': 5 }, 5.5)).throw(`Invalid input`);

    })
    it('test for isItAffordable ', () => {
        expect(bookSelection.isItAffordable(10, 10)).to.equal(`Book bought. You have 0$ left`);
        expect(bookSelection.isItAffordable(10, 50)).to.equal(`Book bought. You have 40$ left`);
        expect(bookSelection.isItAffordable(0, 50)).to.equal(`Book bought. You have 50$ left`);

        expect(bookSelection.isItAffordable(50, 40)).to.equal(`You don't have enough money`);
        expect(bookSelection.isItAffordable(0, -1)).to.equal(`You don't have enough money`);
    })

    it('test for suitableTitles valid input', () => {
        expect(bookSelection.suitableTitles([{ 'title': 'a', 'genre': 'kids' }, { 'title': 'b', 'genre': 'kids' }, { 'title': 'c', 'genre': 'b' }], "kids")).to.deep.equal(['a', 'b']);
        expect(bookSelection.suitableTitles([{ 'title': 'a', 'genre': 'kids' }, { 'title': 'b', 'genre': 'kids' }, { 'title': 'c', 'genre': 'b' }], "b")).to.deep.equal(['c']);
        expect(bookSelection.suitableTitles([], "kids")).to.deep.equal([]);
    })
    it('test for suitableTitles invalid input', () => {
        expect(() => bookSelection.suitableTitles([{ 'title': 'a', 'genre': 'kids' }, { 'title': 'b', 'genre': 'kids' }, { 'title': 'c', 'genre': 'b' }], 5)).throw('Invalid input');
        expect(() => bookSelection.suitableTitles("[{'title':'a','genre':'kids'},{'title':'b','genre':'kids'},{'title':'c','genre':'b'}]", "b")).throw('Invalid input');
        expect(() => bookSelection.suitableTitles(5, 5)).throw('Invalid input');
    })
});
