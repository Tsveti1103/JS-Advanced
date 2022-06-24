// https://github.com/ZahariCheyrekov/M05-JS-Advanced/blob/main/ExamPreparation/Exam8April2020/T02Repository/repository.test.js

const { expect } = require('Chai')
let { Repository } = require("./solution.js");

describe("Repository Tests", () => {
    let repo = {};

    beforeEach(() => repo = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object'
    }));

    describe('Test count', () => {
        it('should return 0', () => {
            expect(repo.count).to.equal(0);
        });
    });

    describe('Test should add valid object to the instance', () => {
        it('should return zero id for only one object added', () => {
            expect(repo.add({ name: 'ji', age: 10, birthday: {} })).to.equal(0);
        });
    });

    describe('Tests should check getId function', () => {
        it('should return that entity with the given id does not exist', () => {
            expect(() => repo.getId(10)).to.throw('Entity with id: 10 does not exist!');
        });
    });

    describe('Tests should check update function', () => {
        it('should throw error for no id presented in the data', () => {
            expect(() => repo.update(0, {},)).to.throw('Entity with id: 0 does not exist!');
        });

        it('should throw error for missing prop in object', () => {
            repo.add({ name: '', age: 0, birthday: {}, });
            expect(() => repo.update(0, { age: 1, birthday: { date: 0 } })).to.throw(Error);
        });

        it('should throw TypeError for invalid type input', () => {
            repo.add({ name: '', age: 0, birthday: {}, });
            expect(() => repo.update(0, { name: 0, age: 1, birthday: { date: 0 } })).to.throw(TypeError);
        });
    })

    describe('Tests should check del funtion', () => {
        it('should delete the given index correctly', () => {
            repo.add({ name: '', age: 1, birthday: {} });
            repo.add({ name: '', age: 1, birthday: {} });
            repo.del(1);
            expect(repo.data.has(1)).to.eq(false);
        });

        it('should throw error for not existing index in the collection', () => {
            expect(() => repo.del(-10)).to.throw('Entity with id: -10 does not exist!');
        });
    });
});