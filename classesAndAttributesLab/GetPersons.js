function getPerson(){
    let result = []
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    // let preson1 = new Person('Anna','Simpson',22,'anna@yahoo.com');
    // let preson2 = new Person('SoftUni');
    // let preson3 = new Person('Stephan','Johnson',25);
    // let preson4 = new Person('Gabriel','Peterson',24,'g.p@gmail.com');
    // result.push(preson1,preson2,preson3,preson4);
    // return result;
    result.push(new Person('Anna','Simpson',22,'anna@yahoo.com'));
    result.push(new Person('SoftUni'));
    result.push(new Person('Stephan','Johnson',25));
    result.push(new Person('Gabriel','Peterson',24,'g.p@gmail.com'));
    return result;
}
console.log(getPerson())