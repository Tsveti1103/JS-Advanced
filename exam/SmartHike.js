class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        let goalFund = Object.keys(this.goals).find(g => g == peak)
        if (goalFund) {
            return `${peak} has already been added to your goals`
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }
    hike(peak, time, difficultyLevel) {
        let goalFund = Object.keys(this.goals).find(g => g == peak)
        if (!goalFund) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike")
        }
        let result = this.resources - time * 10
        if (result < 0) {
            return "You don't have enough resources to complete the hike"
        }
        this.listOfHikes.push({ peak, time, difficultyLevel })
        this.resources -= time * 10;
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest(time) {
        this.resources += time * 10
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    }
    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }
        if (criteria == 'all') {
            let res = []
            for (let hike of this.listOfHikes) {
                res.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`)
            }
            return `All hiking records:\n${res.join('\n')}`
        }

        let res = this.listOfHikes.filter(p => p.difficultyLevel == criteria)
        let best = res.sort((a, b) => a.time - b.time)[0]
        if (!best) {
            return `${this.username} has not done any ${criteria} hiking yet`
        }
        return `${this.username}'s best ${criteria} hike is ${best.peak} peak, for ${best.time} hours`
    }

}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 5, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 2, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('easy'));
console.log(user.showRecord('all'));




