const util = require('util');
const wait = util.promisify(setTimeout);

function getRandomNumberBetween(a, b) {
    return Math.floor((Math.random() * b) + a);
}

class PowerPlant {
    constructor(id) {
        this.id = id;
    }

    async turnOn() {
        console.log(`turning on power plant for ${this.id}`);
        console.time(`turned on power plant ${this.id}`);

        await wait(getRandomNumberBetween(1, 7) * 100);

        console.timeEnd(`turned on power plant ${this.id}`);
        console.log();
    }


    async turnOff() {

        console.log(`turning off power plant for ${this.id}`);
        console.time(`turned off power plant ${this.id}`);

        await wait(getRandomNumberBetween(1, 7) * 100);

        console.timeEnd(`turned off power plant ${this.id}`);
        console.log();

    }
}

module.exports = PowerPlant;