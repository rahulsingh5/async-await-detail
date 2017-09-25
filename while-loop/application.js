const now = require('performance-now');
const {secretAlgorithm} = require('./secret-algorithm');

const NUMBER_OF_RUNS = 10;

async function main() {
    try {

        let retries = 0;
        let totalTime = 0;

        while (retries < NUMBER_OF_RUNS) {

            const start = now();
            await secretAlgorithm();
            const end = now();

            totalTime += (end - start);

            retries++;
        }

        console.log();

        console.log('Total time: ', totalTime);
        console.log('Number of runs : ', NUMBER_OF_RUNS);
        console.log('Average Running time: ', (totalTime / NUMBER_OF_RUNS).toFixed(3));

    } catch (error) {
        console.log('Error', error);
    }
}

main();