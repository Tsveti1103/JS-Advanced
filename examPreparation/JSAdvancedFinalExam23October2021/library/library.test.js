const { expect } = require('chai');
const { library } = require('./library')


describe('Tests for library', () => {
    it('Testing calcPriceOfBook "Invalid input" case', () => {
        expect(() => library.calcPriceOfBook(5, 5)).throw('Invalid input')
        expect(() => library.calcPriceOfBook("str", 5.5)).throw('Invalid input')
        expect(() => library.calcPriceOfBook("str", 'str')).throw('Invalid input')
    })
    it('Testing calcPriceOfBook success case', () => {
        expect(library.calcPriceOfBook('One', 1980)).equal('Price of One is 10.00')
        expect(library.calcPriceOfBook('One', 0)).equal('Price of One is 10.00')
        expect(library.calcPriceOfBook('One', 1981)).equal('Price of One is 20.00')
        expect(library.calcPriceOfBook('One', 2981)).equal('Price of One is 20.00')
    })

    it('Testing findBook "No books" case', () => {
        expect(() => library.findBook([], "Troy")).throw('No books currently availabl')
    })
    it('Testing findBook "success" case', () => {
        expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).equal('We found the book you want.')
        expect(library.findBook(["Troy", "Life Style", "Torronto"], "Life Style")).equal('We found the book you want.')
        expect(library.findBook(["Troy", "Life Style", "Torronto"], "Torronto")).equal('We found the book you want.')
        expect(library.findBook(["Troy", "Life Style", "Torronto"], "troy")).equal('The book you are looking for is not here!')
        expect(library.findBook(["Troy", "Life Style", "Torronto"], "life Style")).equal('The book you are looking for is not here!')
        expect(library.findBook(["Troy", "Life Style", "Torronto"], "torronto")).equal('The book you are looking for is not here!')
    })

    it('Testing arrangeTheBooks success case', () => {
        expect(() => library.arrangeTheBooks(5.5)).throw('Invalid input')
        expect(() => library.arrangeTheBooks(-5)).throw('Invalid input')
        expect(() => library.arrangeTheBooks("str")).throw('Invalid input')
    })
    it('Testing arrangeTheBooks "Invalid input" case', () => {
        expect(library.arrangeTheBooks(40)).equal('Great job, the books are arranged.')
        expect(library.arrangeTheBooks(10)).equal('Great job, the books are arranged.')
        expect(library.arrangeTheBooks(0)).equal('Great job, the books are arranged.')

        expect(library.arrangeTheBooks(41)).equal('Insufficient space, more shelves need to be purchased.')
        expect(library.arrangeTheBooks(410)).equal('Insufficient space, more shelves need to be purchased.')
    })
})