const { expect } = require('Chai');
const { cinema } = require('./cinema')


describe('showMovies', () => {
    describe('showMovies', () => {
        it('happy case', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).equal("King Kong, The Tomorrow War, Joker")
        })
        it('no movies to show case', () => {
            expect(cinema.showMovies([])).equal('There are currently no movies to show.')
        })
    })

    describe('ticketPrice', () => {
        it('happy case', () => {
            expect(cinema.ticketPrice('Premiere')).equal(12.00)
            expect(cinema.ticketPrice('Normal')).equal(7.50)
            expect(cinema.ticketPrice('Discount')).equal(5.50)
        })
        it('Invalid case', () => {
            expect(()=>cinema.ticketPrice('str')).throw('Invalid projection type.')
            expect(()=>cinema.ticketPrice('premiere')).throw('Invalid projection type.')
        })
    })
    describe('swapSeatsInHall', () => {
        it('Happy case', () => {
            expect(cinema.swapSeatsInHall(20,1)).equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1,20)).equal("Successful change of seats in the hall.")
        })
        it('Unsuccessful change', () => {
            expect(cinema.swapSeatsInHall(21,5)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5,0)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5,21)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0,5)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall('str',5)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5,"str")).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall('str',"str")).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5,5)).equal("Unsuccessful change of seats in the hall.")
        })
    })
})