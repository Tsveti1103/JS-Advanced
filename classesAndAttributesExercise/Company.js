class Company {
    constructor() {
        this.departments = new Object();
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || Number(salary) < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.departments[department]) {
            this.departments[department] = []
        }
        this.departments[department].push({ name, salary, position })
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        let bestSalary = 0;
        let bestDepartment;
        let result = []
        for (let [k, v] of Object.entries(this.departments)) {
            let currentSalary = 0;
            for (let index in v) {
                currentSalary += v[index].salary
            }
            currentSalary = (currentSalary / v.length).toFixed(2)
            if (currentSalary > bestSalary) {
                bestSalary = currentSalary
                bestDepartment = k
            }
        }
        this.departments[bestDepartment].sort((a, b) => { return b.salary - a.salary || a.name.localeCompare(b.name) })
        for (let d of this.departments[bestDepartment]) {
            result.push(`${d.name} ${d.salary} ${d.position}`)
        }
        return `Best Department is: ${bestDepartment}\nAverage salary: ${bestSalary}\n${result.join('\n')}`
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());



