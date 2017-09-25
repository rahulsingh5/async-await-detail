const PowerPlant = require('./power-plant');

async function main() {
    try {

        let powerPlants = [];

        powerPlants.push(new PowerPlant('01'));
        powerPlants.push(new PowerPlant('02'));
        powerPlants.push(new PowerPlant('03'));
        powerPlants.push(new PowerPlant('04'));
        powerPlants.push(new PowerPlant('05'));
        powerPlants.push(new PowerPlant('06'));


        for (powerPlant of powerPlants) {
            await powerPlant.turnOn();
        }

        for (powerPlant of powerPlants) {
            await powerPlant.turnOff();
        }


    } catch (error) {
        console.log('Error', error);
    }
}

main();