const { expect } = require('Chai');
const { companyAdministration } = require('./companyAdministration');

describe('Tests for companyAdministration', () => {
    it('test for hiringEmployee "successfully hired" case', () => {
        expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 3)).to.equal(`Peter was successfully hired for the position Programmer.`);
        expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 10)).to.equal(`Peter was successfully hired for the position Programmer.`);
    })
    it('test for hiringEmployee "not approved" case', () => {
        expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 2.99)).to.equal(`Peter is not approved for this position.`);
        expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 0)).to.equal(`Peter is not approved for this position.`);
        expect(companyAdministration.hiringEmployee('Peter', 'Programmer', -1)).to.equal(`Peter is not approved for this position.`);
    })
    it('test for hiringEmployee "Error" case', () => {
        expect(() => companyAdministration.hiringEmployee('Peter', 'Astronaut', 10)).throw(`We are not looking for workers for this position.`);
        expect(() => companyAdministration.hiringEmployee('Peter', 'programmer', 10)).throw(`We are not looking for workers for this position.`);
    })

    it('test for calculateSalary "Bonus" case', () => {
        expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        expect(companyAdministration.calculateSalary(200)).to.equal(4000);
    })
    it('test for calculateSalary "Salary" case', () => {
        expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        expect(companyAdministration.calculateSalary(100)).to.equal(1500);
        expect(companyAdministration.calculateSalary(0)).to.equal(0);
    })
    it('test for calculateSalary "Error Invalid hours" case', () => {
        expect(() => companyAdministration.calculateSalary('10')).throw(`Invalid hours`);
        expect(() => companyAdministration.calculateSalary(-10)).throw(`Invalid hours`);
    })

    it('test for firedEmployee "success" case', () => {
        expect(companyAdministration.firedEmployee(['Peter'], 0)).to.equal('');
        expect(companyAdministration.firedEmployee(['Peter', 'Maria', 'Gosho'], 0)).to.equal('Maria, Gosho');
        expect(companyAdministration.firedEmployee(['Peter', 'Maria', 'Gosho'], 1)).to.equal('Peter, Gosho');
        expect(companyAdministration.firedEmployee(['Peter', 'Maria', 'Gosho'], 2)).to.equal('Peter, Maria');

    })
    it('test for firedEmployee "Error Invalid input" case', () => {
        expect(() => companyAdministration.firedEmployee()).throw(`Invalid input`);
        expect(() => companyAdministration.firedEmployee('Peter', 1)).throw(`Invalid input`);
        expect(() => companyAdministration.firedEmployee(3, 3)).throw(`Invalid input`);
        expect(() => companyAdministration.firedEmployee({ "asd": 2 }, 3)).throw(`Invalid input`);
        expect(() => companyAdministration.firedEmployee('3', '3')).throw(`Invalid input`);
        expect(() => companyAdministration.firedEmployee(['Peter'], 2)).throw(`Invalid input`);
        expect(() => companyAdministration.firedEmployee(['Peter'], -5)).throw(`Invalid input`);
        expect(() => companyAdministration.firedEmployee(['Peter', 'Maria'], -1)).throw(`Invalid input`);
        expect(() => companyAdministration.firedEmployee(['Peter'], 'abc')).throw(`Invalid input`);
        expect(() => companyAdministration.firedEmployee(['Peter'], 3.5)).throw(`Invalid input`);
    })
})
