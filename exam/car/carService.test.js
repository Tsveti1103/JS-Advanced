const { expect } = require('Chai');
const { carService } = require('./carService')


describe("Tests carService", () => {
    describe("isItExpensive ", () => {
        it("Happy case", () => {
            expect(carService.isItExpensive('Engine')).equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('a')).equal('The overall price will be a bit cheaper');
        });
    });

    describe("discount ", () => {
        it("Happy case", () => {
            expect(carService.discount(2, 100)).equal('You cannot apply a discount');
            expect(carService.discount(1, 100)).equal('You cannot apply a discount');
            expect(carService.discount(3, 100)).equal('Discount applied! You saved 15$');
            expect(carService.discount(7, 100)).equal('Discount applied! You saved 15$');
            expect(carService.discount(8, 100)).equal('Discount applied! You saved 30$');
        });
        it("Invalid input case", () => {
            expect(() => carService.discount('str', 100)).throw('Invalid input');
            expect(() => carService.discount('str', 'str')).throw('Invalid input');
            expect(() => carService.discount(2, 'str')).throw('Invalid input');

        });
    });

    describe("partsToBuy ", () => {
        it("Happy case", () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).equal(145);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors", "coil springs"])).equal(375);
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).equal(0);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }], [])).equal(0);

        });
        it("Invalid input case", () => {
            expect(() => carService.partsToBuy('str', ['a', 'b', 'c'])).throw('Invalid input');
            expect(() => carService.partsToBuy(['a', 'b', 'c'], 'str')).throw('Invalid input');
            expect(() => carService.partsToBuy('str', 'str')).throw('Invalid input');


        });
    });


});
