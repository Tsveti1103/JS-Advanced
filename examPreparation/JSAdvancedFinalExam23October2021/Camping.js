class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = []
    }
    findByName(name, arr) {
        for (let i of arr) {
            if (name == i.name) {
                return i;
            }
        }
    }
    registerParticipant(name, condition, money) {
        if (!Object.keys(this.priceForTheCamp).includes(condition)) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        let currentName = this.findByName(name, this.listOfParticipants)
        if (currentName) {
            return `The ${name} is already registered at the camp.`
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant(name) {
        let currentName = this.findByName(name, this.listOfParticipants)
        if (!currentName) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants = this.listOfParticipants.filter(obj => obj.name != name);
        return `The ${name} removed successfully.`
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let playerOne = this.findByName(participant1, this.listOfParticipants)
        if (typeOfGame == 'Battleship') {
            if (!playerOne) {
                throw new Error(`Invalid entered name/s.`)
            }
            playerOne.power += 20
            return `The ${playerOne.name} successfully completed the game ${typeOfGame}.`
        }
        if (typeOfGame == 'WaterBalloonFights') {
            let playerTwo = this.findByName(participant2, this.listOfParticipants)
            if (!playerOne || !playerTwo) {
                throw new Error(`Invalid entered name/s.`)
            }
            if (playerOne.condition != playerTwo.condition) {
                throw new Error(`Choose players with equal condition.`)
            }
            if (playerOne.power == playerTwo.power) {
                return `There is no winner.`
            } else {
                if (playerOne.power - playerTwo.power > 0) {
                    playerOne.wins++
                    return `The ${playerOne.name} is winner in the game ${typeOfGame}.`
                }
                playerTwo.wins++
                return `The ${playerTwo.name} is winner in the game ${typeOfGame}.`
            }
        }
    }
    toString() {
        this.listOfParticipants.sort((a, b) => (b.wins - a.wins));
        let participants = []
        for (let p of this.listOfParticipants) {
            participants.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
        }
        return `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n${participants.join("\n")}`
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

