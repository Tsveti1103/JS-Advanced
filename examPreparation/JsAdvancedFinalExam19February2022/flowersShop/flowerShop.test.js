const {expect} = require('chai');
const {flowerShop} = require('./flowerShop');


describe('Test for flowerShop', () => {
    it('test calcPriceOfFlowers "Invalid input!" case', ()=> {
        expect(() => flowerShop.calcPriceOfFlowers({'asd':5},5,5)).throw(`Invalid input!`)
        expect(() => flowerShop.calcPriceOfFlowers('asd',5.5,5)).throw(`Invalid input!`)
        expect(() => flowerShop.calcPriceOfFlowers('asd',5,5.5)).throw(`Invalid input!`)
        expect(() => flowerShop.calcPriceOfFlowers('asd','5',5)).throw(`Invalid input!`)
        expect(() => flowerShop.calcPriceOfFlowers('asd',5,'5')).throw(`Invalid input!`)
        expect(() => flowerShop.calcPriceOfFlowers(5,5.5,'5')).throw(`Invalid input!`)
    })
    it('test calcPriceOfFlowers success case', ()=> {
        expect(flowerShop.calcPriceOfFlowers('rose',5,5)).to.equal(`You need $25.00 to buy rose!`)
        expect(flowerShop.calcPriceOfFlowers('rose',0,5)).to.equal(`You need $0.00 to buy rose!`)
    })

    it('test checkFlowersAvailable "The flower are sold!" case', ()=> {
        expect(flowerShop.checkFlowersAvailable('rose',["Rose", "Lily", "Orchid"])).to.equal(`The rose are sold! You need to purchase more!`)
        expect(flowerShop.checkFlowersAvailable('LiLy',["Rose", "Lily", "Orchid"])).to.equal(`The LiLy are sold! You need to purchase more!`)
        expect(flowerShop.checkFlowersAvailable('Orchi',["Rose", "Lily", "Orchid"])).to.equal(`The Orchi are sold! You need to purchase more!`)
    })
    it('test checkFlowersAvailable "The flower are available!" case', ()=> {
        expect(flowerShop.checkFlowersAvailable('Rose',["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`)
        expect(flowerShop.checkFlowersAvailable('Lily',["Rose", "Lily", "Orchid"])).to.equal(`The Lily are available!`)
        expect(flowerShop.checkFlowersAvailable('Orchid',["Rose", "Lily", "Orchid"])).to.equal(`The Orchid are available!`)
    })

    it('test sellFlowers "Invalid input!" case', ()=> {
        expect(() => flowerShop.sellFlowers({'asd':5},5)).throw(`Invalid input!`)
        expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],5.5)).throw(`Invalid input!`)
        expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],5)).throw(`Invalid input!`)
        expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],-5)).throw(`Invalid input!`)
        expect(() => flowerShop.sellFlowers([],0)).throw(`Invalid input!`)
    })
    it('test sellFlowers success case', ()=> {
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],0)).to.equal(`Lily / Orchid`)
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1)).to.equal(`Rose / Orchid`)
        expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],2)).to.equal(`Rose / Lily`)
    })
})