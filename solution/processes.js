const util = require('util');
const wait = util.promisify(setTimeout);

module.exports = {
    async process01() {
        try {

            console.log('Process01 started');

            throw new Error('Process 01 failed');

            console.time('Process01 ended');

            await wait(5000);

            console.timeEnd('Process01 ended');

            console.log();

            return 'process01-value';

        } catch (error) {
            console.log('Error ', error);
        }
    },


    async process02() {
        try {

            console.log('Process02 started');
            console.time('Process02 ended');

            await wait(3000);

            console.timeEnd('Process02 ended');

            console.log();

            return 'process02-value';

        } catch (error) {
            console.log('Error', error);
        }
    }
};