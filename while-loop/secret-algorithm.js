const util = require('util');
const wait = util.promisify(setTimeout);

function getRandomNumberBetween(a, b) {
    return Math.floor((Math.random() * b) + a);
}

module.exports = {
    async secretAlgorithm() {
        console.time('secretAlgorithm');

        await wait(getRandomNumberBetween(1, 7) * 100);

        console.timeEnd('secretAlgorithm');
    }
};