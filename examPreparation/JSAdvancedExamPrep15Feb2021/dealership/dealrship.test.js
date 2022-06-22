const {expect} = require('Chai');
const {dealership} = require('./dealership')

describe("Tests dealership", ()=> {
    describe("newCarCost", ()=> {
        it("Happy case", ()=> {
            expect(dealership.newCarCost('Audi A4 B8',50000)).equal(35000)
            expect(dealership.newCarCost('Audi A6 4K',50000)).equal(30000)
            expect(dealership.newCarCost('Audi A8 D5',50000)).equal(25000)
            expect(dealership.newCarCost('Audi TT 8J',50000)).equal(36000)
            expect(dealership.newCarCost('Opel',50000)).equal(50000)
        });
     });

     describe("carEquipment", ()=> {
        it("Happy case", ()=> {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],[0,1])).deep.equal(['heated seats', 'sliding roof'])
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],[2,3])).deep.equal(['sport rims', 'navigation'])
        });
     });
     
     describe("euroCategory", ()=> {
        it("Happy case", ()=> {
            expect(dealership.euroCategory(4)).equal( `We have added 5% discount to the final price: 14250.`)
            expect(dealership.euroCategory(5)).equal( `We have added 5% discount to the final price: 14250.`)
        });

        it("low category case", ()=> {
            expect(dealership.euroCategory(3)).equal( 'Your euro category is low, so there is no discount from the final price!')
            expect(dealership.euroCategory(2)).equal( 'Your euro category is low, so there is no discount from the final price!')

        });
     });
});
